
namespace XhGame{


declare interface PostArgs {
  name?: string;
  url?: string;
  params: any;
}

export class HttpUtil {
    constructor() {
    }
    /**
     * POST请求封装
     * @param PostArgs {PostArgs}
     * XhGame.HttpUtil.post({ name: "common.login", params: {type:1}})
     * XhGame.HttpUtil.post({ url: "http://a.b.c/login", params: {type:1}})
     *
     */
    public static post(args: PostArgs): Promise<any> {
        let path: string;
        if (args.url) {
            path = args.url;
        } else {
            // todo 如果api配置中未找到对应路径的错误处理
            path = XhGameConfig.BaseUrl + XhGameConfig.Apis[args.name];
        }

        return new Promise((resolve, reject) => {
            const req = new egret.HttpRequest();
            req.responseType = egret.HttpResponseType.TEXT;
            req.open(path, egret.HttpMethod.POST);
            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            req.send(HttpUtil.parseParams(args.params));

            req.addEventListener(egret.Event.COMPLETE, evt => {
                
                const request = <egret.HttpRequest>evt.currentTarget;
                const resp = request.response

                if (resp && typeof resp == 'string') {
                    try {
                        let obj = JSON.parse(resp);
                        let {status_code, data, message} = obj
                        
                        if (status_code == 200) {
                            resolve(data)
                        } else {
                            reject(new XhError(message, "http", status_code))
                        }

                    } catch (e) {
                        reject(new XhError("返回的数据格式错误", "http"))
                    }
                } else {
                    reject(new XhError("返回的数据类型错误", "http"))
                }

            }, this);

            req.addEventListener(egret.IOErrorEvent.IO_ERROR, err => {
                reject(new XhError("网络请求出错", "http"))
            }, this);
        })

    }
    public static parseParams(obj: any): string {
        if (!obj) return
        const _keys = Object.keys(obj)
        let result = ""

        for (let i = 0, len = _keys.length; i < len; i++) {
            let key = _keys[i]
            let value = obj[key]
            result += `${key}=${value}`
            if (i !== len-1) result += "&"
        }

        return result
    }
}
class XhError {
    message: string;
    type: string;
    errorCode: number;
    constructor(message: string, type: string, errorCode: number = 0) {
        this.message = message;
        this.type = type;
        this.errorCode = errorCode
    }
}
}