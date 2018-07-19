//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private _bird: map.bigRicherMap

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene() {


        let bigRicher: map.bigRicherMap = new map.bigRicherMap();
        this._bird = bigRicher;
        console.log(this.stage.height);

        bigRicher.width = this.width - this.width / 10
        bigRicher.height = bigRicher.width;
        // this._bird.x = this.stage.stageWidth / 2;
        // this._bird.y = this.stage.stageHeight / 2;
        this._bird.x = this.stage.stageWidth / 2;
        this._bird.y = this.stage.stageHeight / 2;
        this._bird.anchorOffsetX = this._bird.width / 2;
        this._bird.anchorOffsetY = this._bird.height / 2;

        this.addChild(bigRicher);

        // this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        // this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        // this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);

        XhGame.EventBus.addEventListener("event_steal", this.callback, this);
        XhGame.EventBus.addEventListener("event_cannon", this.callback, this);
    }

    private callback(event: egret.Event) {
        if (event.type == "event_steal") {
            let dialog: map.eventDialogSteal = new map.eventDialogSteal(2);
            this.addChild(dialog);

        } else if (event.type == "event_cannon") {
            let dialog: map.eventDialogSteal = new map.eventDialogSteal(1);
            this.addChild(dialog);
        }
    }

    private click(evt: egret.TouchEvent) {
        console.log("click touch angle:" + this.defAngle);
        // this._bird.tapHandler();

    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    private touchPoints: Object = { names: [] }; //{touchid:touch local,names:[ID1,ID2]};
    private distance: number = 0;
    private defAngle: number = 0;
    private touchCon: number = 0;
    private _currentBirdRotation: number = 0;
    private mouseDown(evt: egret.TouchEvent) {
        console.log("touch begin:" + evt.touchPointID);
        if (this.touchPoints[evt.touchPointID] == null) {
            this.touchPoints[evt.touchPointID] = new egret.Point(evt.stageX, evt.stageY);
            this.touchPoints["names"].push(evt.touchPointID);
        }
        this.touchCon++;

        if (this.touchCon == 2) {
            this.distance = this.getTouchDistance();
            console.log("distance:" + this.distance);

            // this.defAngle = this.getTouchAngle();
            //console.log("touch angle:" + this.defAngle);
            //console.log("bird angle:" + this._bird.rotation);
        }

    }

    private mouseMove(evt: egret.TouchEvent) {
        //egret.log("touch move:"+evt.touchPointID);

        this.touchPoints[evt.touchPointID].x = evt.stageX;
        this.touchPoints[evt.touchPointID].y = evt.stageY;

        console.log("this.distance:" + this.distance);

        if (this.touchCon == 2) {
            var newdistance = this.getTouchDistance();
            console.log("newdistance:" + newdistance);
            console.log("newdistance / this.distance:" + newdistance / this.distance);

            this._bird.scaleX *= newdistance / this.distance;
            this._bird.scaleY = this._bird.scaleX;

            // var newangle = this.getTouchAngle();
            // this._bird.rotation = this._currentBirdRotation + newangle - this.defAngle;
        }
    }


    private mouseUp(evt: egret.TouchEvent) {
        console.log("touch end:" + evt.touchPointID);
        delete this.touchPoints[evt.touchPointID];
        this.touchCon--;
        //

        // this._bird.width *= this._bird.scaleX;
        // this._bird.height *= this._bird.scaleY;
        // this._bird.scaleX = 1;
        // this._bird.scaleY = 1;
        // this._bird.anchorOffsetX = this._bird.width/2;
        // this._bird.anchorOffsetY = this._bird.height/2;

        //console.log("bird size [wdith:" + this._bird.width.toFixed(1) + ", height:" + this._bird.height.toFixed(1) + "]");
        //console.log("bird angle:" + this._bird.rotation);
    }

    private getTouchDistance(): number {
        var _distance: number = 0;
        var names = this.touchPoints["names"];
        _distance = egret.Point.distance(this.touchPoints[names[names.length - 1]],
            this.touchPoints[names[names.length - 2]]);
        return _distance;
    }


    private c: number = 0.017453292; //2PI/360
    private getTouchAngle(): number {
        var ang: number = 0;
        var names = this.touchPoints["names"];
        var p1: egret.Point = this.touchPoints[names[names.length - 1]];
        var p2: egret.Point = this.touchPoints[names[names.length - 2]];

        ang = Math.atan2((p1.y - p2.y), (p1.x - p2.x)) / this.c;
        return ang;
    }
}
