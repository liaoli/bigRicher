module map {
	export class bigRicherMap extends eui.Group {
		public constructor() {
			super();
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

		}




		private onAddToStage(event: egret.Event) {
			this.createGameScene();
		}

		protected createGameScene(): void {
			let mapBg = map.GameUtil.createBitmapByName("gezi_bg_png");
			this.stage.scaleMode = egret.StageScaleMode.NO_BORDER;
			mapBg.width = this.width;
			this.bgwidth = mapBg.width;
			mapBg.height = this.bgwidth;

			this.bgHeight = mapBg.height;
			this.addChild(mapBg);
			this.createjumpgezi();
			this.addgezi();

			// this.createjumpgezi_test();
			this.init();
			this.initExternalInterface();



		}


		public initExternalInterface(): void {
			// TypeScript 代码
			egret.ExternalInterface.addCallback("sendToJS", function (message: string) {
				console.log("message form native : " + message);//message from native : message from native
			});

		}


		private bgwidth: number;
		private bgHeight: number;
		private row: number = 10;
		private mGgzw: number;
		private startgz: map.gezi;
		private socendgz: map.gezi;
		private jumpgezis: map.gezi[] = [];
		private fangzigezis: map.gezi[] = [];
		private geziTextures: { [key: string]: egret.Texture } = {
		};

		public getGeziTexture(img: string): egret.Texture {
			let tx: egret.Texture = this.geziTextures[img];

			if (tx === undefined) {
				tx = RES.getRes(img);
				this.geziTextures[img] = tx;
			}

			return tx;
		}


		public createjumpgezi_test() {

			let gzw: number = Math.sqrt((Math.pow(this.bgwidth / 2, 2) + Math.pow(this.bgHeight / 2, 2))) / this.row;

			this.mGgzw = Math.sqrt(Math.pow(gzw, 2) * 2);
			for (let i: number = 0; i < this.row; i++) {
				for (let j: number = 0; j < this.row; j++) {
					this.addChild(this.createGeziByIndex(i, j, "map_jinbi_geizi_png", 0));
				}
			}
		}

		public createjumpgezi() {

			let gzw: number = Math.sqrt((Math.pow(this.bgwidth / 2, 2) + Math.pow(this.bgHeight / 2, 2))) / this.row;

			this.mGgzw = Math.sqrt(Math.pow(gzw, 2) * 2);

			for (let i: number = 0; i < this.row; i++) {

				for (let j: number = 0; j < this.row; j++) {
					switch (i) {
						case 1:

							if (j == 2) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_hongbaofagnzi_png", 1))
							}

							if (j == 3) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 2))
							}
							if (j == 5) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 4))
							}
							if (j == 6) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 5))
							}
							break;
						case 2:
							if (j == 2) {
								//jump  起点
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_sart_png", 1));

							}

							if (j == 3) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 2));
							}

							if (j == 4) {
								//jump 问号
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_wenhao_png", 3));
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 3))
							}
							if (j == 5) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 4))
							}
							if (j == 6) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 5))
							}
							if (j == 7) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 7))
							}
							break;
						case 3:
							if (j == 6) {
								//jump 问号
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_wenhao_png", 6));
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 6))
							}

							if (j == 7) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 7));
							}

							if (j == 2) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 24));
							}
							if (j == 1) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 24))
							}
							break;
						case 4:
							if (j == 1) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 23))
							}
							if (j == 2) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 23));
							}
							if (j == 7) {
								//jump 盾牌
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_dun_png", 8));
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 8))
							}
							if (j == 8) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 9));
							}
							if (j == 9) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 9))
							}

							break;
						case 5:
							if (j == 1) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 22))
							}
							if (j == 2) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 22));
							}

							if (j == 8) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 10));
							}
							if (j == 9) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 10))
							}
							break;
						case 6:
							if (j == 1) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 21))
							}
							if (j == 2) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 21));
							}

							if (j == 3) {
								//问号
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_wenhao_png", 20));
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 20))
							}
							if (j == 8) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 11));
							}
							if (j == 9) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 11))
							}

							break;
						case 7:
							if (j == 3) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 19));
							}
							if (j == 4) {
								//jump偷
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_tou_png", 18))
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 18))
							}

							if (j == 8) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 12));
							}
							if (j == 9) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 12))
							}
							break;
						case 8:
							if (j == 3) {
								//房
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 19))
							}
							if (j == 4) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 17));
							}

							if (j == 5) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 16));
							}
							if (j == 6) {
								//jump炮
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_pao_png", 15));
								//房
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 15))
							}
							if (j == 7) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 14));
							}
							if (j == 8) {
								//jump体力
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_tili_png", 13));
								//房
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 13))
							}
							break;
						case 9:
							if (j == 4) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 17))
							}

							if (j == 5) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 16))
							}
							if (j == 6) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 14))
							}
							break;
						default:
							break;
					}

				}
			}

			this.sort();
		}


		private sort() {
			this.jumpgezis.sort((a: map.gezi, b: map.gezi) => {
				return a.index - b.index;
			})

			this.fangzigezis.sort((a: map.gezi, b: map.gezi) => {
				return a.index - b.index;
			})
		}


		private async addgezi() {

			let resp = await XhGame.getMapData();

			this.indexOfPlayer = resp.currentPosition;
			resp.map.forEach((item, index) => {
				console.log(item);
			})

			if (resp.map.length == this.jumpgezis.length) {

				for (let i = 0; i < resp.map.length; i++) {
					this.addChild(this.jumpgezis[i]);
					if (i == 2 || i == 5 || i == 7 || i == 12 || i == 14 || i == 17 || i == 19) {
						continue
					}
					this.addChild(this.fangzigezis[i]);
				}
			}

			this.initPalyer();
		}

		private createGeziByIndex(i: number, j: number, img: string, index: number): map.gezi {

			let x = this.bgwidth / 2 - this.mGgzw / 2 * (j + 1) + this.mGgzw * i / 2;

			let y = this.bgHeight - this.mGgzw / 2 * (j + 2) - this.mGgzw * i / 2;

			let geziGroup: map.gezi = new map.gezi(x, y, img, this.mGgzw, this.mGgzw, index);

			return geziGroup;
		}


		public initPalyer(): void {

			this.player = new eui.Image();
			this.player.source = "player_png";
			this.player.width = this.mGgzw - 30;
			this.player.height = this.mGgzw - 30;

			this.startgz = this.jumpgezis[this.indexOfPlayer];
			this.player.x = this.startgz.x + (this.startgz.width - this.player.width) / 2
			this.player.y = this.startgz.y + this.startgz.height / 2 - this.player.height;
			console.log("player x = " + this.player.x + ",player y = " + this.player.y);
			this.addChild(this.player)
		}

		private nextGezi() {
			console.log("this.indexOfNex = " + this.indexOfNext);

			if (this.indexOfNext >= this.nextJumpGezis.length) {
				this.indexOfNext = 0;
				this.touchEnabled = true;
				return;
			}

			let nextGz: map.gezi = this.nextJumpGezis[this.indexOfNext];

			this.targetPos = new egret.Point();
			this.targetPos.x = nextGz.x + (nextGz.width - this.player.width) / 2;
			this.targetPos.y = nextGz.y + nextGz.height / 2 - this.player.height;



			console.log("this.targetPos:" + this.targetPos);

			console.log("this.player.x=" + this.player.x + ",this.player.x=" + this.player.y);


			if (0 <= this.oldindexOfPlayer && this.oldindexOfPlayer < 12) {
				this.point2.x = this.player.x;
				this.point2.y = this.targetPos.y;
			} else {
				this.point2.x = this.targetPos.x;
				this.point2.y = this.player.y;
			}
			console.log("this.point2:" + this.point2);
			this.oldindexOfPlayer++;
			if (this.oldindexOfPlayer == this.jumpgezis.length) {
				this.oldindexOfPlayer = 0;
			}



			egret.Tween.get(this).to({ factor: 1 }, 500).call(() => {

				let jinbi: map.JinbiOfGezi = this.nextJinbis.shift();

				this.removeChild(jinbi);

				map.JinbiOfGezi.reclaim(jinbi);

				this.indexOfNext++;
				this.nextGezi();
			});
		}



		private player: eui.Image;
		private indexOfPlayer: number = 0;
		private targetPos: egret.Point;
		private point2: egret.Point = new egret.Point();
		private nextJumpGezis: Array<map.gezi>;
		private nextJinbis: Array<map.JinbiOfGezi> = new Array<map.JinbiOfGezi>();
		private indexOfNext: number = 0;
		private oldindexOfPlayer: number = 0;


		//添加factor的set,get方法,注意用public  
		public get factor(): number {
			return 0;
		}
		//计算方法参考 二次贝塞尔公式  
		public set factor(value: number) {
			//console.log("value = " + value);
			this.player.x = (1 - value) * (1 - value) * this.player.x + 2 * value * (1 - value) * this.point2.x + value * value * (this.targetPos.x);
			this.player.y = (1 - value) * (1 - value) * this.player.y + 2 * value * (1 - value) * this.point2.y + value * value * (this.targetPos.y);
		}

		private init() {
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapHandler, this);
		}

		public tapHandler() {
			this.touchEnabled = false;
			this.oldindexOfPlayer = this.indexOfPlayer;
			XhGame.playBigRicher().then((res) => {
				let nextGeziNum = res.step;
				console.log("nextGeziNum = " + nextGeziNum)
				console.log("this.indexOfPlayer = " + this.indexOfPlayer)
				let start = this.indexOfPlayer + 1;
				let end = this.indexOfPlayer + nextGeziNum + 1;
				let lengthOfJumpgezis = this.jumpgezis.length;
				let delt = end - lengthOfJumpgezis;
				if (start == lengthOfJumpgezis) {
					//player的当前位置是最后一格的时候
					start = 0;
					end = start + nextGeziNum;
					this.nextJumpGezis = this.jumpgezis.slice(start, end);
					console.log("start = " + start + ",end = " + end);
					this.indexOfPlayer = end - 1;
				} else {
					if (delt > 0) {
						//超过一圈了，得从数组最前面取格子补上
						this.nextJumpGezis = this.jumpgezis.slice(start, end);
						console.log("start = " + start + ",end = " + end);
						start = 0;
						end = end - lengthOfJumpgezis;
						let gezis = this.jumpgezis.slice(start, end);
						console.log("this.nextJumpGezis.length = " + this.nextJumpGezis.length);
						console.log("gezis.length = " + gezis.length);
						this.nextJumpGezis = this.nextJumpGezis.concat(gezis);
						console.log("this.nextJumpGezis.length = " + this.nextJumpGezis.length);
						this.indexOfPlayer = end - 1;
					} else {
						this.nextJumpGezis = this.jumpgezis.slice(start, end);
						this.indexOfPlayer += nextGeziNum;
					}
				}

				console.log("this.nextJumpGezis.length = " + this.nextJumpGezis.length);

				console.log("this.indexOfPlayer = " + this.indexOfPlayer)
				let items = res.rewards;

				console.log("this.nextJumpGezis.length = " + this.nextJumpGezis.length);
				console.log("items.length = " + items.length);

				this.nextJumpGezis.forEach((item, index) => {
					let jinbiValue: number = 0;
					if (items[index].reward.event == 1) {
						jinbiValue = items[index].reward.extra.coin;
					}

					let jinbi: map.JinbiOfGezi = map.JinbiOfGezi.produce(this.mGgzw, jinbiValue + "");
					jinbi.x = item.x + (item.width - jinbi.width) / 3;
					jinbi.y = item.y - jinbi.height / 8;
					this.nextJinbis.push(jinbi);
				})



				this.nextJinbis.forEach((item, index) => {
					this.addChild(item);
				})

				this.nextGezi();

			}).catch((err) => {

				if (err.errorCode == 4005) {
					console.log(err.message);
				}
				console.log(err);
			})


		}

	}

}