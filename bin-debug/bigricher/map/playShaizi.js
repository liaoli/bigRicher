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
    var playShaizi = (function (_super) {
        __extends(playShaizi, _super);
        function playShaizi() {
            var _this = _super.call(this) || this;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
            _this.skinName = "playShaizi";
            return _this;
        }
        playShaizi.prototype.onComplete = function () {
            console.log("onComplete");
            this.init();
        };
        playShaizi.prototype.init = function () {
        };
        return playShaizi;
    }(eui.Component));
    map.playShaizi = playShaizi;
    __reflect(playShaizi.prototype, "map.playShaizi");
})(map || (map = {}));
//# sourceMappingURL=playShaizi.js.map