module map {
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

		private
		public constructor() {
			super();
			this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
			this.skinName = "resource/assets/cunstom_skin/eventSteal.exml";

		}

		protected createChildren() {
			super.createChildren();
			console.log("createChildren");

		}
		private onComplete(): void {
			console.log("onComplete");
			this.init();
		}

		public init() {
			this.dialog_close.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				// this.parent.removeChild(this);

				this.topUser.top = 106;
				this.hideorshowViewafterEvent(true);
				this.hideorshowViewbeforeEvent(false);

				console.log("click");
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

		private hideorshowViewafterEvent(visible: boolean) {
			this.eventDiscription.visible = visible;
			this.sure.visible = visible;
			this.cancle.visible = visible;

		}

		private hideorshowViewbeforeEvent(visible: boolean) {
			this.leftuser.visible = visible;
			this.rightUser.visible = visible;
			this.dialog_tips.visible = visible;
		}

		private click(evt: egret.TouchEvent) {
			console.log("click touch angle:" + evt.target);

		}

	}
}