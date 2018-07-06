// TypeScript file
namespace XhGame {

    export async function getMapData() {
        return XhGame.HttpUtil.post({ name: "common.game.bigRicher.map", params: {} })
    }

    export function playBigRicher() {
        return XhGame.HttpUtil.post({ name: "common.game.bigRicher.play", params: {} })
    }

}