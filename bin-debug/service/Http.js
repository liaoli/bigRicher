var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var XhGame;
(function (XhGame) {
    var HttpUtil = (function () {
        function HttpUtil() {
        }
        /**
         * POST请求封装
         * @param PostArgs {PostArgs}
         * XhGame.HttpUtil.post({ name: "common.login", params: {type:1}})
         * XhGame.HttpUtil.post({ url: "http://a.b.c/login", params: {type:1}})
         *
         */
        HttpUtil.post = function (args) {
            var _this = this;
            var path;
            if (args.url) {
                path = args.url;
            }
            else {
                // todo 如果api配置中未找到对应路径的错误处理
                path = XhGameConfig.BaseUrl + XhGameConfig.Apis[args.name];
            }
            egret.HttpRequest.prototype["isNetUrl"] = function (url) {
                var lowercaseUrl = url.toLowerCase();
                console.log("isNetUrl url:", url);
                if (lowercaseUrl.indexOf("http://") != -1 || lowercaseUrl.indexOf("https://") != -1) {
                    console.log("url valid:", true);
                    return true;
                }
                return false;
            };
            console.log("\nHTTP REQUEST =====> URL:", path, "\n", "params:", JSON.stringify(args.params));
            return new Promise(function (resolve, reject) {
                var req = new egret.HttpRequest();
                req.responseType = egret.HttpResponseType.TEXT;
                req.open(path + '?v=' + new Date().getTime(), egret.HttpMethod.POST);
                req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                req.send(HttpUtil.parseParams(args.params));
                req.addEventListener(egret.Event.COMPLETE, function (evt) {
                    var request = evt.currentTarget;
                    var resp = request.response;
                    if (resp && typeof resp == 'string') {
                        try {
                            var obj = JSON.parse(resp);
                            var status_code = obj.status_code, data = obj.data, message = obj.message, timestamp = obj.timestamp;
                            if (status_code == 200) {
                                resolve({ data: data, timestamp: timestamp });
                            }
                            else {
                                reject(new XhError(message, "http", status_code));
                            }
                        }
                        catch (e) {
                            reject(new XhError("返回的数据格式错误", "http"));
                        }
                    }
                    else {
                        reject(new XhError("返回的数据类型错误", "http"));
                    }
                }, _this);
                req.addEventListener(egret.IOErrorEvent.IO_ERROR, function (err) {
                    reject(new XhError("网络请求出错", "http"));
                }, _this);
            });
        };
        HttpUtil.parseParams = function (obj) {
            if (!obj)
                return;
            var _keys = Object.keys(obj);
            var result = "";
            for (var i = 0, len = _keys.length; i < len; i++) {
                var key = _keys[i];
                var value = obj[key];
                result += key + "=" + value;
                if (i !== len - 1)
                    result += "&";
            }
            return result;
        };
        return HttpUtil;
    }());
    XhGame.HttpUtil = HttpUtil;
    __reflect(HttpUtil.prototype, "XhGame.HttpUtil");
    var XhError = (function () {
        function XhError(message, type, errorCode) {
            if (errorCode === void 0) { errorCode = 0; }
            this.message = message;
            this.type = type;
            this.errorCode = errorCode;
        }
        return XhError;
    }());
    XhGame.XhError = XhError;
    __reflect(XhError.prototype, "XhGame.XhError");
})(XhGame || (XhGame = {}));
//# sourceMappingURL=Http.js.map