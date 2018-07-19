namespace map {
	export class eventDialogSteal extends eui.Component {


		private dialog_close: eui.Button;
		private eventIcon: eui.Image;

		private topUser: map.eventHeadPortrait;
		private leftuser: map.eventHeadPortrait;
		private rightUser: map.eventHeadPortrait;

		private cancle: eui.Button;
		private sure: eui.Button;
		private dialogTitle: eui.Label;
		private dialog_tips: eui.Label;
		private eventDiscription: eui.Label;
		public selectUser: map.eventHeadPortrait;
		public type: number;


		public constructor(type: number) {
			super();
			this.type = type;
			this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
			this.skinName = "eventSteal";

		}




		protected createChildren() {
			super.createChildren();
			console.log("createChildren");

		}
		private onComplete(): void {
			console.log("onComplete");
			this.init();
		}

		private callback() {

			egret.Tween.get(this.selectUser, { loop: false }).
				to({ scaleX: 1, scaleY: 1, y: 200.5 }, 500, egret.Ease.sineIn).call(() => {
					this.hideorshowViewafterEvent(true);
				});

		}

		public init() {

			switch (this.type) {
				case 1:
					this.eventIcon.texture = RES.getRes("bigricher_event_cannon_png");
					break;
				case 2:
					this.eventIcon.texture = RES.getRes("bigricher_event_steal_png");
					break;

			}



			this.topUser.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				// this.parent.removeChild(this);



				this.selectUser = this.topUser;
				this.eventAnimation();

				console.log("click");
			}, this);



			this.leftuser.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

				this.selectUser = this.leftuser;
				this.eventAnimation();
			}, this);


			this.rightUser.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

				this.selectUser = this.rightUser;
				this.eventAnimation();
			}, this);

			this.dialog_close.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				this.parent.removeChild(this);
			}, this);

			this.sure.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				this.parent.removeChild(this);
				console.log("click");
			}, this);

			this.cancle.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				this.parent.removeChild(this);
				console.log("click");
			}, this);

			this.hideorshowViewafterEvent(false);
		}


		private eventAnimation() {
			this.hideorshowViewbeforeEvent(false);
			egret.Tween.get(this.selectUser, { loop: false }).
				to({ x: this.topUser.x, y: this.topUser.y + 75}, 300, egret.Ease.sineIn).call(() => {
					XhGame.EventBus.addEventListener("event_steal_pao", this.callback, this);
					XhGame.Tools.anchorCenter(this.selectUser, false);
					egret.Tween.get(this.selectUser, { loop: false }).to({
						scaleX: 1.5, scaleY: 1.5
					}, 500, egret.Ease.sineIn).call(() => {

						switch (this.type) {
							case 1:
								this.selectUser.playCannonAnimation();
								break;
							case 2:
								this.selectUser.playstealAnimation();
								break;

						}


					}, this);
				});
		}

		private hideorshowViewafterEvent(visible: boolean) {
			this.eventDiscription.visible = visible;
			this.sure.visible = visible;
			this.cancle.visible = visible;

		}

		private hideorshowViewbeforeEvent(visible: boolean) {
			this.leftuser.visible = visible;
			this.topUser.visible = visible;
			this.rightUser.visible = visible;
			this.selectUser.visible = true;
			this.dialog_tips.visible = visible;
		}

		private click(evt: egret.TouchEvent) {
			console.log("click touch angle:" + evt.target);

		}

	}
}