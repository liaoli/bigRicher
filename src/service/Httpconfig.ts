class XhGameConfig {
    static BaseUrl = 'https://pregame.xinhuifun.cn/';
    static _platform = "5"
    static baseparamsconfig = {
        device_id: "",
        version: "1.0.0",
        brand: 'debug',
        net: "",
        get platform() {
            if (!this._platform) {
                if (egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE) {
                    // Native环境
                    this._platform = egret.Capabilities.os.toLowerCase() == 'ios' ? '1' : '2'
                } else {
                    this._platform = '4'
                }
            }
            return this._platform
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
    }
    public static Apis  = {
        'common.login': 'api/login/thirdLogin',
        'common.game.bigRicher.map': 'api/game/map',
        'common.game.bigRicher.play': 'api/game/play',
    }
    //     https://pregame.xinhuifun.cn/api/game/clearStep?isphper=100001
    //     https://pregame.xinhuifun.cn/api/stamina/add?isphper=100001
}