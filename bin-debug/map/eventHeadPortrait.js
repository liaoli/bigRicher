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
    var eventHeadPortrait = (function (_super) {
        __extends(eventHeadPortrait, _super);
        function eventHeadPortrait() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/assets/cunstom_skin/headPortrait.exml";
            return _this;
        }
        return eventHeadPortrait;
    }(eui.Component));
    map.eventHeadPortrait = eventHeadPortrait;
    __reflect(eventHeadPortrait.prototype, "map.eventHeadPortrait");
})(map || (map = {}));
//# sourceMappingURL=eventHeadPortrait.js.map