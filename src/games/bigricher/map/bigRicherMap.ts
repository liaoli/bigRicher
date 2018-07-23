namespace map {
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

			mapBg.width = this.width;
			this.bgwidth = mapBg.width;
			mapBg.height = this.height;

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
		private row: number = 12;
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

			let gw = 128 * 750 / 1454;
			let gh = 82 * gw / 128;

			this.mGgzw = Math.sqrt(Math.pow(gzw, 2) * 2);
			for (let i: number = 0; i < this.row; i++) {
				for (let j: number = 0; j < this.row; j++) {
					this.addChild(this.createGeziBytest(i, j, "gezi_jinbi_png", 0));
				}
			}
		}

		private createGeziBytest(i: number, j: number, img: string, index: number): map.gezi {

			let gw = 128 * 750 / 1454;
			let gh = 82 * gw / 128;

			let x = this.bgwidth / 2 - gw / 2 * (j + 1) + gw * i / 2;

			let y = this.bgHeight - gh / 2 * (j + 2) - gh * i / 2;

			let geziGroup: map.gezi = new map.gezi(x, y, img, gw, gh, index);

			return geziGroup;
		}

		public createjumpgezi() {

			let gzw: number = Math.sqrt((Math.pow(this.bgwidth / 2, 2) + Math.pow(this.bgHeight / 2, 2))) / this.row;

			this.mGgzw = Math.sqrt(Math.pow(gzw, 2) * 2);

			for (let i: number = 0; i < this.row; i++) {

				for (let j: number = 0; j < this.row; j++) {
					switch (i) {
						case 2:

							if (j == 3) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_hongbaofagnzi_png", 1))
							}

							if (j == 4) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 2))
							}
							if (j == 6) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 4))
							}
							if (j == 7) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 5))
							}
							break;
						case 3:
							if (j == 3) {
								//jump  起点
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_sart_png", 1));

							}

							if (j == 4) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 2));
							}

							if (j == 5) {
								//jump 问号
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_wenhao_png", 3));
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 3))
							}
							if (j == 6) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 4))
							}
							if (j == 7) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 5))
							}
							if (j == 8) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 7))
							}
							break;
						case 4:
							if (j == 7) {
								//jump 问号
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_wenhao_png", 6));
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 6))
							}

							if (j == 8) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 7));
							}

							if (j == 3) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 24));
							}
							if (j == 2) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 24))
							}
							break;
						case 5:
							if (j == 2) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 23))
							}
							if (j == 3) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 23));
							}
							if (j == 8) {
								//jump 盾牌
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_dun_png", 8));
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 8))
							}
							if (j == 9) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 9));
							}
							if (j == 10) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 9))
							}

							break;
						case 6:
							if (j == 2) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 22))
							}
							if (j == 3) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 22));
							}

							if (j == 9) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 10));
							}
							if (j == 10) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 10))
							}
							break;
						case 7:
							if (j == 2) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 21))
							}
							if (j == 3) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 21));
							}

							if (j == 4) {
								//问号
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_tou_png", 20));
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 20))
							}
							if (j == 9) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 11));
							}
							if (j == 10) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 11))
							}

							break;
						case 8:
							if (j == 4) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 19));
							}
							if (j == 5) {
								//jump偷
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_wenhao_png", 18))
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 18))
							}

							if (j == 9) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 12));
							}
							if (j == 10) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 12))
							}
							break;
						case 9:
							if (j == 4) {
								//房
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 19))
							}
							if (j == 5) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 17));
							}

							if (j == 6) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 16));
							}
							if (j == 7) {
								//jump炮
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_pao_png", 15));
								//房
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 15))
							}
							if (j == 8) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 14));
							}
							if (j == 9) {
								//jump体力
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_tili_png", 13));
								//房
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 13))
							}
							break;
						case 10:
							if (j == 5) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 17))
							}

							if (j == 6) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 16))
							}
							if (j == 8) {
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
			let data = resp.data;

			this.indexOfPlayer = data.currentPosition;


			if (data.map.length == this.jumpgezis.length) {


				data.map.forEach((item, i) => {


					if (i == 2) {
						this.addChildAt(this.jumpgezis[i], 3);
					} else if (i == 4) {
						this.addChildAt(this.jumpgezis[i], 7);
					} else if (i == 6) {
						this.addChildAt(this.jumpgezis[i], 7);
					} else {
						this.addChild(this.jumpgezis[i]);
					}

					if (i == 2 || i == 5 || i == 7 || i == 12 || i == 14 || i == 17 || i == 19) {

					} else if (i == 0) {
						let gezi: map.gezi = this.fangzigezis[i];
						this.addChild(gezi);

					} else {
						let gezi: map.gezi = this.fangzigezis[i];
						gezi.data = item;
						if (i > 8 && i < 12) {
							this.addChildAt(gezi, 10);
						} else if (i == 4) {
							this.addChildAt(gezi, 8);
						} else if (i == 6) {
							this.addChildAt(gezi, 8);
						} else {

							this.addChild(gezi);
						}

					}

				});

			}


			this.initPalyer();
		}

		private createGeziByIndex(i: number, j: number, img: string, index: number): map.gezi {

			// let x = this.bgwidth / 2 - this.mGgzw / 2 * (j + 1) + this.mGgzw * i / 2;

			// let y = this.bgHeight - this.mGgzw / 2 * (j + 2) - this.mGgzw * i / 2;

			// let geziGroup: map.gezi = new map.gezi(x, y, img, this.mGgzw, this.mGgzw, index);

			// return geziGroup;
			let gw = 128 * 750 / 1454;
			let gh = 82 * gw / 128;

			let x = this.bgwidth / 2 - gw / 2 * (j + 1) + gw * i / 2;

			let y = this.bgHeight - gh / 2 * (j + 2) - gh * i / 2;

			let geziGroup: map.gezi = new map.gezi(x, y, img, gw, gh, index);
			return geziGroup
		}


		public initPalyer(): void {

			this.initplayerAnimation(0, 0);
			console.log("player x = " + this.player.x + ",player y = " + this.player.y);

		}

		private event(fangzigezi: map.gezi) {
			let eventData: any;
			if (this.lastgeiziOfjump.reward.length == 2) {
				eventData = this.lastgeiziOfjump.reward[1];
			} else {
				eventData = this.lastgeiziOfjump.reward[0];
			}
			let id = eventData.event;
			console.log("事件 -----》id = " + id);
			switch (id) {
				case 0://红包事件
					break;
				case 1://测试


					break;
				case 4://升级建筑
					fangzigezi.changeLevel = eventData.extra.level;
					this.buildFangzimaoyan(fangzigezi.x + fangzigezi.width / 2, fangzigezi.y + fangzigezi.height / 2);
					break;
				case 5://修复建筑

					break;

				case 6://偷
					XhGame.EventBus.dispatchEvent(new egret.Event("event_steal"));
					break;
				case 7://炮
					XhGame.EventBus.dispatchEvent(new egret.Event("event_cannon"));

					break;
				case 8:
					//随机事件
					XhGame.EventBus.dispatchEvent(new egret.Event("event_suijishijian"));
					break;
				case 9://获取盾牌
					XhGame.EventBus.dispatchEvent(new egret.Event("event_dun"));
					break;
				case 10://获取体力
					XhGame.EventBus.dispatchEvent(new egret.Event("event_tili"));
					break;
				case 11://雷击
					this.fangzimaoyan(fangzigezi.x + fangzigezi.width / 2, fangzigezi.y + fangzigezi.height / 2);
					break;
				case 12://踩狗屎

					break;
				case 13://三个骰子

					break;
				case 14://当前建筑已经达到最高等级

					break;
				case 15://其他建筑还未达到升级的标准

					break;

			}
		}

		private nextGezi() {
			console.log("this.indexOfNex = " + this.indexOfNext);

			if (this.indexOfNext >= this.nextJumpGezis.length) {
				this.indexOfNext = 0;
				this.touchEnabled = true;
				let fangzigezi = this.fangzigezis[this.indexOfPlayer];
				this.setPlayStopAnimation(this.indexOfPlayer);
				this.event(fangzigezi);
				XhGame.EventBus.dispatchEvent(new egret.Event("event_play_enable"));
				return;
			}

			let nextGz: map.gezi = this.nextJumpGezis[this.indexOfNext];

			this.targetPos = new egret.Point();
			// this.targetPos.x = nextGz.x + (nextGz.width - this.player.width) / 2;
			// this.targetPos.y = nextGz.y + nextGz.height / 2 - this.player.height;


			this.targetPos.x = nextGz.x+ nextGz.width / 2 ;
			this.targetPos.y = nextGz.y+  nextGz.height / 2 ;


			console.log("this.targetPos:" + this.targetPos);

			console.log("this.player.x=" + this.player.x + ",this.player.x=" + this.player.y);


			if (0 <= this.oldindexOfPlayer && this.oldindexOfPlayer < 12) {
				this.point2.x = this.player.x;
				this.point2.y = this.targetPos.y;


			} else {
				this.point2.x = this.targetPos.x;
				this.point2.y = this.player.y;

			}
			this.setPlayjumpAnimation(this.oldindexOfPlayer);
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


		private setPlayjumpAnimation(index: number) {

			if (index >= 0 && index < 12) {

				this.player.animation.play("pig_bei_idle");

				if ((index >= 8 && index < 12) || index == 4 || index == 6) {

					this.player.skewY = 180;
				} else {
					this.player.skewY = 0;
				}
			}

			if (index >= 12 && index < 23) {

				this.player.animation.play("pig_zheng_idle");
				if ((index >= 20 && index <= 23) || index == 16 || index == 18) {
					this.player.skewY = 0;
				} else {
					this.player.skewY = 180;
				}
			}

		}


		private setPlayStopAnimation(index: number) {

			if (index >= 0 && index < 12) {

				this.player.animation.play("pig_bei");

				if ((index >= 8 && index < 12) || index == 4 || index == 6) {

					this.player.skewY = 180;
				} else {
					this.player.skewY = 0;
				}
			}

			if (index >= 12 && index <= 23) {
				this.player.animation.play("pig_zheng");
				if ((index >= 20 && index <= 23) || index == 16 || index == 18) {
					this.player.skewY = 0;
				} else {
					this.player.skewY = 180;
				}
			}

		}


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

		}

		private lastgeiziOfjump: any;
		private res: any;
		public tapHandler() {
			this.touchEnabled = false;
			this.oldindexOfPlayer = this.indexOfPlayer;
			XhGame.playBigRicher().then((res) => {
				this.shaiizi(200, 200);
				this.res = res;

			}).catch((err) => {

				if (err.errorCode == 4005) {
					console.log(err.message);
				}
				console.log(err);
			})


		}

		private egretFactory: dragonBones.EgretFactory;
		private eff_robot: dragonBones.EgretArmatureDisplay;

		private playerFactory: dragonBones.EgretFactory;
		private player: dragonBones.EgretArmatureDisplay;
		private fangzimaoyan(x: number, y: number) {

			this.egretFactory = tools.DragonBoneTools.Instance.createEff2New(
				"yan_ske_json",
				"yan_tex_json",
				"yan_tex_png",
			);

			this.eff_robot = this.egretFactory.buildArmatureDisplay("yan");
			this.addChild(this.eff_robot);

			this.eff_robot.animation.fadeIn("smoke");

			this.eff_robot.addEventListener(dragonBones.EventObject.START, this.animationEventHandler, this);
			this.eff_robot.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.animationEventHandler, this);
			this.eff_robot.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);

			this.eff_robot.x = x;
			this.eff_robot.y = y;
		}

		private animationEventHandler(event: dragonBones.EgretEvent): void {
			let eventObject = event.eventObject;
			//console.log(eventObject.animationState.name, event.type, eventObject.name ? eventObject.name : "");
			if (event.type == "loopComplete") {
				this.eff_robot.animation.stop();
				this.removeChild(this.eff_robot);

				this.fangzigezis[this.indexOfPlayer].changFangziLevel()
			}

		}

		public buildFangzimaoyan(x: number, y: number) {

			this.egretFactory = tools.DragonBoneTools.Instance.createEff2New(
				"build_smoke_ske_json",
				"build_smoke_tex_json",
				"build_smoke_tex_png",
			);

			this.eff_robot = this.egretFactory.buildArmatureDisplay("build_smoke");
			this.addChild(this.eff_robot);

			this.eff_robot.animation.fadeIn("smoge2");

			this.eff_robot.addEventListener(dragonBones.EventObject.START, this.animationEventHandler, this);
			this.eff_robot.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.animationEventHandler, this);
			this.eff_robot.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);

			this.eff_robot.x = x;
			this.eff_robot.y = y;
		}


		public shaiizi(x: number, y: number) {

			this.egretFactory = tools.DragonBoneTools.Instance.createEff2New(
				"sezi_ske_json",
				"sezi_tex_json",
				"sezi_tex_png",
			);

			this.eff_robot = this.egretFactory.buildArmatureDisplay("sezi");
			this.addChild(this.eff_robot);

			this.eff_robot.animation.fadeIn("newAnimation");

			this.eff_robot.addEventListener(dragonBones.EventObject.START, this.shaiziEventHandler, this);
			this.eff_robot.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.shaiziEventHandler, this);
			this.eff_robot.addEventListener(dragonBones.EventObject.FRAME_EVENT, this.shaiziEventHandler, this);

			this.eff_robot.x = map.getRandomInt(300, this.width - 300);
			this.eff_robot.y = map.getRandomInt(300, this.height - 300);
		}

		public initplayerAnimation(x: number, y: number) {

			this.playerFactory = tools.DragonBoneTools.Instance.createEff2New(
				"pig_ske_json",
				"pig_tex_json",
				"pig_tex_png",

			);


			let armature: dragonBones.Armature = this.playerFactory.buildArmature("pig");
			this.player = this.playerFactory.buildArmatureDisplay("pig");


			this.addChild(this.player);



			this.setPlayStopAnimation(this.indexOfPlayer);


			this.player.addEventListener(dragonBones.EventObject.START, this.playerEventHandler, this);
			this.player.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.playerEventHandler, this);
			this.player.addEventListener(dragonBones.EventObject.FRAME_EVENT, this.playerEventHandler, this);

			console.log("this.player.width=" + this.player.width + ",this.player.x=" + this.player.height);
			this.player.scaleX = 0.5;
			this.player.scaleY = 0.5;
			this.startgz = this.jumpgezis[this.indexOfPlayer];

			console.log("this.player.width=" + this.player.width + ",this.player.x=" + this.player.height);


			x = this.startgz.x;
			y = this.startgz.y;

			console.log("this.startgz.width=" + this.startgz.width + ",this.startgz.x=" + this.startgz.height);
			console.log("this.player.width=" + this.player.width + ",this.player.x=" + this.player.height);

			console.log("x =" + x + ",y=" + y);


			this.player.x = x + this.startgz.width / 2 ;
			this.player.y = y + this.startgz.height / 2;

			


		}

		private playerEventHandler(event: dragonBones.EgretEvent) {
			let eventObject = event.eventObject;
			console.log(eventObject.animationState.name, event.type, eventObject.name ? eventObject.name : "");
		}

		private shaiziTops: Array<string> = ["top1_png", "top2_png", "top3_png", "top4_png", "top5_png", "top6_png"];
		private shaiziLefts: Array<string> = ["left2_png", "left1_png", "left5_png", "left6_png", "left3_png", "left4_png"];
		private shaiziRights: Array<string> = ["riht3_png", "riht4_png", "riht1_png", "riht2_png", "riht6_png", "riht5_png"];


		private shaiziEventHandler(event: dragonBones.EgretEvent): void {
			let eventObject = event.eventObject;
			//console.log(eventObject.animationState.name, event.type, eventObject.name ? eventObject.name : "");
			if (event.type == "loopComplete") {
				this.eff_robot.animation.stop();
				this.removeChild(this.eff_robot);
				this.initjumpData();
			} else if (event.type == "frameEvent") {

				if ("start" == eventObject.name) {

				} else if ("result" == eventObject.name) {

				} else if ("end" == eventObject.name) {
					let data = this.res.data;
					let t = data.step - 1;
					tools.setNewSlot(this.eff_robot, "top", this.shaiziTops[t]);
					tools.setNewSlot(this.eff_robot, "left", this.shaiziLefts[t]);
					tools.setNewSlot(this.eff_robot, "right", this.shaiziRights[t]);
				} else if ("gone" == eventObject.name) {

				}

			}

		}

		private initjumpData() {
			let data = this.res.data;
			let nextGeziNum = data.step;
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
			let items = data.rewards;

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

			this.lastgeiziOfjump = items[items.length - 1];

			this.nextJinbis.forEach((item, index) => {
				this.addChild(item);
			})

			this.nextGezi();

		}

	}


}