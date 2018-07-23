var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var map;
(function (map) {
    var mapConfig = (function () {
        function mapConfig() {
        }
        mapConfig.scale = 750 / 1454;
        return mapConfig;
    }());
    map.mapConfig = mapConfig;
    __reflect(mapConfig.prototype, "map.mapConfig");
})(map || (map = {}));
//# sourceMappingURL=mapConfig.js.map