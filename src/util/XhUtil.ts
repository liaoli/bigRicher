namespace XhGame{
export class Tools {
    constructor(){}
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    public static  createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /**
     * 清除容器中所有东西
     * @param sp DisplayObjectContainer
     */
    public static removeALL(sp: egret.DisplayObjectContainer): void {
        while(sp.numChildren > 0) {
            sp.removeChildAt(0);
        }
    }
    /**
     * 从父级移除child
     * @param child
     */
    public static removeFromParent(child:egret.DisplayObject) {
        if (child.parent == null)
            return;
        child.parent.removeChild(child);
    }
    /**
     * 在父容器中居中, 不考虑缩放变形引起的定位
     * 
     */
    public static displayCenter(obj: egret.DisplayObject) {
        let { width, height, anchorOffsetX, anchorOffsetY, parent } = obj
        if (height == 0 || width == 0) return
        let offset_x = width/2 - anchorOffsetX
        let offset_y = height/2 - anchorOffsetY 
        if (parent) {
            let { width, height } = parent
            obj.x = width/2 - offset_x
            obj.y = height/2 - offset_y
        }
    }
    /**
     * 锚点居中
     */
    public static anchorCenter(obj: egret.DisplayObject,is:Boolean = false): void {
        if(obj.anchorOffsetX != obj.width >> 1){
            obj.anchorOffsetX = obj.width >> 1;
            obj.anchorOffsetY = obj.height >> 1;
            if(is){
                return;
            }
            // 重新计算坐标定位
            obj.x += obj.anchorOffsetX;
            obj.y += obj.anchorOffsetY;
        }
    }
    /**按钮点击弹一下再执行代码 
     *使用方法:Tool.ButtonBound(e.target,function(){console.log("执行");},this); 
    */
    public static ButtonBound(btn:egret.DisplayObjectContainer, callback:Function, self:any){
        btn.touchEnabled = false;
        Tools.anchorCenter(btn);
        egret.Tween.get(btn).to({"scaleX":1.1,"scaleY":1.1},100)
        .to({"scaleX":1,"scaleY":1},200,egret.Ease.bounceOut).call(()=>{
            btn.touchEnabled = true;
            callback.call(self,[btn]);
        },self);
    }
    // 缓动
    /** 由小到大进入 **/
    public static poompop(sp) {
        Tools.anchorCenter(sp);
        console.log(111)
        sp.scaleX = sp.scaleY = 0.5;
        return egret.Tween.get(sp).to({ scaleX: 1,scaleY: 1 },500,egret.Ease.circOut)
    }
    /** 由大到小进入 **/
    public static narrowpop(sp) {
        Tools.anchorCenter(sp);
        sp.scaleX = sp.scaleY = 2;
        return egret.Tween.get(sp).to({ scaleX: 1,scaleY: 1 },500,egret.Ease.circIn)
    }
    /** 从屏幕左外到右缓动到指定地方 **/
    public static LMoveR(obj: egret.DisplayObject, _x: number, _y: number, wait: number = 0, times: number, ease: Function = null, parent: boolean = false): egret.Tween {
        obj.y = _y;
        obj.x = -obj.width;
        if(parent) {
            obj.x -= obj.parent.x;
        }
        return egret.Tween.get(obj).wait(wait).to({ x: _x,y: _y },times,ease);
    }
    /** 从屏幕右外到左缓动到指定地方 **/
    public static RMoveL(obj: egret.DisplayObject, _x: number, _y: number, wait: number = 0, times: number, ease: Function = null, parent: boolean = false): egret.Tween{
        obj.y = _y;
        obj.x = egret.MainContext.instance.stage.stageWidth + obj.width;
        if(parent) {
            obj.x += obj.parent.x;
        }
        return egret.Tween.get(obj).wait(wait).to({ x: _x,y: _y },times,ease);
    }
    /** 左移出屏幕 **/
    public static LMoveRout(obj: egret.DisplayObject, wait: number = 0, times: number, ease: Function = null): egret.Tween {
        return egret.Tween.get(obj).wait(wait).to({ x: obj.x + egret.MainContext.instance.stage.stageWidth },times,ease);
    }
    /** 右移出屏幕 **/
    public static RMoveLout(obj: egret.DisplayObject, wait: number = 0, times: number,ease: Function = null): egret.Tween {
        return egret.Tween.get(obj).wait(wait).to({ x: -(obj.x + obj.width) },times,ease);
    }
    /** 下移出屏幕 **/
    public static TMoveBout(obj: egret.DisplayObject, wait: number = 0, times: number, ease: Function = null): egret.Tween {
        return egret.Tween.get(obj).wait(wait).to({ y: obj.y + egret.MainContext.instance.stage.stageHeight },times,ease);
    }
    /** 上移出屏幕 **/
    public static BMoveTout(obj: egret.DisplayObject, wait: number = 0, times: number,ease: Function = null): egret.Tween {
        return egret.Tween.get(obj).wait(wait).to({ y: -(obj.y + obj.height) },times,ease);
    }
    /**
     * 从屏幕上外到下缓动到指定地方
     * 
     */
    public static TMoveB(obj: egret.DisplayObject, _x: number, _y: number, wait: number = 0, times: number, ease: Function = null, parent: boolean = false): egret.Tween {
        obj.y = -obj.height;
        obj.x = _x;
        if(parent) {
            obj.x += obj.parent.x;
        }
        return egret.Tween.get(obj).wait(wait).to({ x: _x,y: _y },times,ease);
    }
    /**
     *  从屏幕下外到上缓动到指定地方
     * 
     */
    public static BMoveT(obj: egret.DisplayObject, _x: number, _y: number, wait: number = 0, times: number, ease: Function = null, parent: boolean = false): egret.Tween {
        obj.y = egret.MainContext.instance.stage.stageHeight + obj.height;
        obj.x = _x;
        if(parent) {
            obj.x += obj.parent.x;
        }
        return egret.Tween.get(obj).wait(wait).to({ x: _x,y: _y },times,ease);
    }

    /**
     * 锁屏
     */
    public static lock():void {
        egret.MainContext.instance.stage.touchChildren = false;
    }

    /**
     * 解屏
     */
    public static unlock():void {
        egret.MainContext.instance.stage.touchChildren = true;
    }
    /**
     * 文本overflow显示省略号 _len 保留的字节长度 中文4，英文2
     */
    public static getChar(_str: string,_len: number): string {

            var _ba: egret.ByteArray = new egret.ByteArray;

            _ba.writeUTFBytes(_str);

            if(_ba.length < _len) return _str;

            _ba.position = 0;

            return _ba.readUTFBytes(_len) + "...";

    }
    public static async getImageFromUrl(url:string) {
        return new Promise((resolve) => {
            let imgLoader:egret.ImageLoader = new egret.ImageLoader;
            imgLoader.crossOrigin = "anonymous";
            imgLoader.once( egret.Event.COMPLETE, (evt:egret.Event) => {
                let loader:egret.ImageLoader = evt.currentTarget;
                let texture = new egret.Texture();
                texture._setBitmapData(loader.data);
                let bmp:egret.Bitmap = new egret.Bitmap( texture );
                resolve(bmp);
            }, this );
            imgLoader.once(egret.IOErrorEvent.IO_ERROR, (evt:egret.Event) => {
                let bmp = XhGame.Tools.createBitmapByName('egret_icon_png');
                resolve(bmp);
            }, this );
            imgLoader.load( url );
        }).catch(err => {
            let bmp = XhGame.Tools.createBitmapByName('egret_icon_png');
            return Promise.resolve(bmp);
        })
    }
}
}