var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var map;
(function (map) {
    var gezi = (function (_super) {
        __extends(gezi, _super);
        // public constructor(geziImg: string, w: number, h: number) {
        // 	super();
        // 	this.geziImg = geziImg;
        // 	this.mWidth = w;
        // 	this.mHight = h;
        // 	this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        // }
        function gezi(x, y, geziImg, w, h, index) {
            var _this = _super.call(this) || this;
            _this.padding = 8;
            _this.geziImg = geziImg;
            _this.mWidth = w;
            _this.mHight = h;
            _this.mX = x;
            _this.mY = y;
            _this.index = index;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        /**初始化*/
        gezi.prototype.onAddToStage = function (event) {
            this.width = this.mWidth;
            this.height = this.mHight;
            this.x = this.mX;
            this.y = this.mY;
            this.image = new eui.Image;
            this.image.texture = (this.parent).getGeziTexture(this.geziImg);
            // this.source = this.geziImg;
            this.image.width = this.mWidth - this.padding;
            this.image.height = this.mHight - this.padding;
            this.addChild(this.image);
        };
        return gezi;
    }(eui.Group));
    map.gezi = gezi;
    __reflect(gezi.prototype, "map.gezi");
})(map || (map = {}));
//# sourceMappingURL=gezi.js.map