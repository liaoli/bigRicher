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
    var eventSuijiTips = (function (_super) {
        __extends(eventSuijiTips, _super);
        function eventSuijiTips(type) {
            var _this = _super.call(this) || this;
            _this.type = type;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
            _this.skinName = "eventSuijiTips";
            return _this;
        }
        eventSuijiTips.prototype.onComplete = function () {
            console.log("onComplete");
            this.init();
        };
        eventSuijiTips.prototype.init = function () {
            this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
            this.leftBt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
            this.rightBt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
            switch (this.type) {
                case 1:
                    this.title.text = "分享再翻倍";
                    this.eventDescription.text = "恭喜你获得小幸运\n下一回合经过金币建筑收益X3";
                    this.shareMessage.text = "分享，即收益再翻倍";
                    this.rightBt.source = "bigricher_dialog_event_cancle_png";
                    this.leftBt.source = "bigricher_dialog_event_sure_png";
                    break;
                case 2:
                    break;
            }
        };
        eventSuijiTips.prototype.click = function (evt) {
            var _this = this;
            console.log("click touch angle:");
            var target = evt.target;
            XhGame.Tools.ButtonBound(target, function () {
                if (target == _this.close) {
                    _this.parent.removeChild(_this);
                }
                else if (target == _this.rightBt) {
                }
                else if (target == _this.leftBt) {
                }
            }, this);
        };
        return eventSuijiTips;
    }(eui.Component));
    map.eventSuijiTips = eventSuijiTips;
    __reflect(eventSuijiTips.prototype, "map.eventSuijiTips");
})(map || (map = {}));
//# sourceMappingURL=eventSuijiTips.js.map