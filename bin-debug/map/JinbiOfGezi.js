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
    var JinbiOfGezi = (function (_super) {
        __extends(JinbiOfGezi, _super);
        function JinbiOfGezi(w, value) {
            var _this = _super.call(this) || this;
            var jinbi = new eui.Image();
            jinbi.source = "jinbi_png";
            jinbi.width = w / 6;
            jinbi.height = w / 4;
            _this.addChild(jinbi);
            var _bitmapText = new egret.BitmapText();
            _bitmapText.font = RES.getRes("shuzi_fnt");
            _bitmapText.y = jinbi.height;
            _bitmapText.textAlign = egret.HorizontalAlign.CENTER;
            _bitmapText.text = value;
            _this.addChild(_bitmapText);
            jinbi.x = Math.abs(_bitmapText.width - jinbi.width) / 2;
            return _this;
            // let vLayout: eui.VerticalLayout = new eui.VerticalLayout();
            // vLayout.horizontalAlign =  egret.HorizontalAlign.CENTER;
            // this.layout = vLayout;
        }
        /**生产*/
        JinbiOfGezi.produce = function (w, value) {
            if (map.JinbiOfGezi.cacheDict == null)
                map.JinbiOfGezi.cacheDict = [];
            var dict = map.JinbiOfGezi.cacheDict;
            var bullet;
            if (dict.length > 0) {
                bullet = dict.pop();
            }
            else {
                bullet = new map.JinbiOfGezi(w, value);
            }
            return bullet;
        };
        /**回收*/
        JinbiOfGezi.reclaim = function (bullet) {
            if (map.JinbiOfGezi.cacheDict == null)
                map.JinbiOfGezi.cacheDict = [];
            var dict = map.JinbiOfGezi.cacheDict;
            if (dict.indexOf(bullet) == -1)
                dict.push(bullet);
        };
        JinbiOfGezi.cacheDict = null;
        return JinbiOfGezi;
    }(eui.Group));
    map.JinbiOfGezi = JinbiOfGezi;
    __reflect(JinbiOfGezi.prototype, "map.JinbiOfGezi");
})(map || (map = {}));
//# sourceMappingURL=JinbiOfGezi.js.map