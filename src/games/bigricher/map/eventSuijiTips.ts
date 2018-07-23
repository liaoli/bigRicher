namespace map {
	export class eventSuijiTips extends eui.Component {

		private rightBt: eui.Image;
		private leftBt: eui.Image;
		private close: eui.Image;
		private title: eui.Label;
		private eventDescription: eui.Label;
		private shareMessage: eui.Label;
		public type: number;

		public constructor(type :number) {
			super();
			this.type = type
			this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
			this.skinName = "eventSuijiTips";

		}

		private onComplete(): void {
			console.log("onComplete");
			this.init();
		}

		private init() {
			this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);

			this.leftBt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);

			this.rightBt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);

			switch (this.type) {
				case 1:
					this.title.text = "分享再翻倍"
					this.eventDescription.text = "恭喜你获得小幸运\n下一回合经过金币建筑收益X3"
					this.shareMessage.text = "分享，即收益再翻倍"
					this.rightBt.source = "bigricher_dialog_event_cancle_png";
					this.leftBt.source = "bigricher_dialog_event_sure_png";
					break;
				case 2:

					break;
			}

		}






		private click(evt: egret.TouchEvent) {
			console.log("click touch angle:");
			let target = evt.target;
			XhGame.Tools.ButtonBound(target, () => {

				if (target == this.close) {
					this.parent.removeChild(this);
				} else if (target == this.rightBt) {

				} else if (target == this.leftBt) {

				}

			}, this);

		}
	}
}