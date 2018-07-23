namespace map {
	export class eventDun extends eui.Component {
		private dun: eui.Image;
		public constructor() {
			super();
			this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
			this.skinName = "eventDun";

		}

		private onComplete(): void {
			console.log("onComplete");
			XhGame.Tools.anchorCenter(this.dun, false);
			egret.Tween.get(this.dun, { loop: false })
				.to({ skewY: 360 }, 2000).call(() => {
					this.parent.removeChild(this);
				});

		}
	}
}