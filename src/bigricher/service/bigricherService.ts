// TypeScript file
namespace XhGame {

    export async function getMapData() {
        return XhGame.HttpUtil.post({ name: "common.game.bigRicher.map", params: {isphper:100001} })
    }

    export function playBigRicher() {
        return XhGame.HttpUtil.post({ name: "common.game.bigRicher.play", params: {isphper:100001} })
    }

}