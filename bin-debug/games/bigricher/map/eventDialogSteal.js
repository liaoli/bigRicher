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
    var eventDialogSteal = (function (_super) {
        __extends(eventDialogSteal, _super);
        function eventDialogSteal(type) {
            var _this = _super.call(this) || this;
            _this.type = type;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
            _this.skinName = "eventSteal";
            return _this;
        }
        eventDialogSteal.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            console.log("createChildren");
        };
        eventDialogSteal.prototype.onComplete = function () {
            console.log("onComplete");
            this.init();
        };
        eventDialogSteal.prototype.callback = function () {
            var _this = this;
            egret.Tween.get(this.selectUser, { loop: false }).
                to({ scaleX: 1, scaleY: 1, y: 200.5 }, 500, egret.Ease.sineIn).call(function () {
                _this.hideorshowViewafterEvent(true);
                _this.selectUser.enabled = false;
            });
        };
        eventDialogSteal.prototype.init = function () {
            var _this = this;
            switch (this.type) {
                case 1:
                    this.eventIcon.texture = RES.getRes("bigricher_event_cannon_png");
                    this.dialogTitle.text = "看谁不爽就打谁";
                    this.eventDiscription.text = "打破对方一个金币建筑,你获得了4500金币";
                    break;
                case 2:
                    this.eventIcon.texture = RES.getRes("bigricher_event_steal_png");
                    break;
            }
            this.topUser.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                // this.parent.removeChild(this);
                _this.selectUser = _this.topUser;
                _this.eventAnimation();
                console.log("click");
            }, this);
            this.leftuser.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.selectUser = _this.leftuser;
                _this.eventAnimation();
            }, this);
            this.rightUser.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.selectUser = _this.rightUser;
                _this.eventAnimation();
            }, this);
            this.dialog_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.parent.removeChild(_this);
            }, this);
            this.sure.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.parent.removeChild(_this);
                console.log("click");
            }, this);
            this.cancle.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.parent.removeChild(_this);
                console.log("click");
            }, this);
            this.hideorshowViewafterEvent(false);
        };
        eventDialogSteal.prototype.eventAnimation = function () {
            var _this = this;
            this.hideorshowViewbeforeEvent(false);
            egret.Tween.get(this.selectUser, { loop: false }).
                to({ x: this.topUser.x, y: this.topUser.y + 75 }, 300, egret.Ease.sineIn).call(function () {
                XhGame.EventBus.addEventListener("event_steal_pao", _this.callback, _this);
                XhGame.Tools.anchorCenter(_this.selectUser, false);
                egret.Tween.get(_this.selectUser, { loop: false }).to({
                    scaleX: 1.5, scaleY: 1.5
                }, 500, egret.Ease.sineIn).call(function () {
                    switch (_this.type) {
                        case 1:
                            _this.selectUser.playCannonAnimation();
                            break;
                        case 2:
                            _this.selectUser.playstealAnimation();
                            break;
                    }
                }, _this);
            });
        };
        eventDialogSteal.prototype.hideorshowViewafterEvent = function (visible) {
            this.eventDiscription.visible = visible;
            this.sure.visible = visible;
            this.cancle.visible = visible;
        };
        eventDialogSteal.prototype.hideorshowViewbeforeEvent = function (visible) {
            this.leftuser.visible = visible;
            this.topUser.visible = visible;
            this.rightUser.visible = visible;
            this.selectUser.visible = true;
            this.dialog_tips.visible = visible;
        };
        eventDialogSteal.prototype.click = function (evt) {
            console.log("click touch angle:" + evt.target);
        };
        return eventDialogSteal;
    }(eui.Component));
    map.eventDialogSteal = eventDialogSteal;
    __reflect(eventDialogSteal.prototype, "map.eventDialogSteal");
})(map || (map = {}));
//# sourceMappingURL=eventDialogSteal.js.map