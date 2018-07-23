var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var XhGameConfig = (function () {
    function XhGameConfig() {
    }
    XhGameConfig.BaseUrl = 'https://pregame.xinhuifun.cn/';
    XhGameConfig._platform = "5";
    XhGameConfig.baseparamsconfig = {
        device_id: "",
        version: "1.0.0",
        brand: 'debug',
        net: "",
        get platform() {
            if (!this._platform) {
                if (egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE) {
                    // Native环境
                    this._platform = egret.Capabilities.os.toLowerCase() == 'ios' ? '1' : '2';
                }
                else {
                    this._platform = '4';
                }
            }
            return this._platform;
        },
        get os() {
            return egret.Capabilities.os;
        },
        get lang() {
            return egret.Capabilities.language;
        },
        get time() {
            return Math.floor(new Date().getTime() / 1000);
        }
    };
    XhGameConfig.Apis = {
        'common.login': 'api/login/thirdLogin',
        'common.game.bigRicher.map': 'api/game/map',
        'common.game.bigRicher.play': 'api/game/play',
    };
    return XhGameConfig;
}());
__reflect(XhGameConfig.prototype, "XhGameConfig");
//# sourceMappingURL=Httpconfig.js.map