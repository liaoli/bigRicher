namespace map {
	export class eventGetTili extends eui.Component {
		private getTiliTips:eui.Label;
		public constructor() {
		super();
			this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
			this.skinName = "eventGetTili";

		}

		private onComplete(): void {
			console.log("onComplete");
			XhGame.Tools.anchorCenter(this,false);
			egret.Tween.get(this, { loop: false })
				.to({ scaleX : 1.2, scaleY : 1.2 }, 2000).call(() => {
					this.parent.removeChild(this);
				});

		}
	}
}