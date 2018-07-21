module map {
	export class playShaizi extends eui.Component {

		public constructor() {
			super();
			this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
			this.skinName = "playShaizi";

		}

		private onComplete(): void {
			console.log("onComplete");
			this.init();
		}

		private init() {
			
		}
	}
}