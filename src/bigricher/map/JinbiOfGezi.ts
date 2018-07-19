namespace map {
	export class JinbiOfGezi extends eui.Group {

		private jinbiIcon: eui.Image;
		private value:eui.BitmapLabel;
		public constructor(w: number,value:string) {
			super();
			let jinbi: eui.Image = new eui.Image();
			jinbi.source = "jinbi_png"
			jinbi.width = w / 6;
			jinbi.height = w / 4;
			this.addChild(jinbi)

			let _bitmapText: egret.BitmapText = new egret.BitmapText();

			_bitmapText.font = RES.getRes("shuzi_fnt");
			
			_bitmapText.y = jinbi.height ;
			
			
			
		
			_bitmapText.textAlign =  egret.HorizontalAlign.CENTER;
			
			_bitmapText.text = value;

			this.addChild(_bitmapText);
			jinbi.x = Math.abs(_bitmapText.width - jinbi.width)/2;

			// let vLayout: eui.VerticalLayout = new eui.VerticalLayout();
			// vLayout.horizontalAlign =  egret.HorizontalAlign.CENTER;
			// this.layout = vLayout;

		}



		private static cacheDict: Array<map.JinbiOfGezi> = null;


		/**生产*/
		public static produce(w: number,value:string): map.JinbiOfGezi {
			if (map.JinbiOfGezi.cacheDict == null)
				map.JinbiOfGezi.cacheDict = [];
			let dict: map.JinbiOfGezi[] = map.JinbiOfGezi.cacheDict
			let bullet: map.JinbiOfGezi;
			if (dict.length > 0) {
				bullet = dict.pop();
			} else {
				bullet = new map.JinbiOfGezi(w,value);
			}
			return bullet;
		}

		/**回收*/
		public static reclaim(bullet: map.JinbiOfGezi): void {

			if (map.JinbiOfGezi.cacheDict == null)
				map.JinbiOfGezi.cacheDict = [];
			let dict: map.JinbiOfGezi[] = map.JinbiOfGezi.cacheDict;
			if (dict.indexOf(bullet) == -1)
				dict.push(bullet);
		}
	}

}