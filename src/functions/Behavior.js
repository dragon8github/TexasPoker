/**
 * 行为类。
 * 玩家和Npc都会频繁使用。
 */
class Behavior {

	// 传入一个玩家实例，要判断该玩家是否隶属Player类才行
	constructor (player) {
       this.player = player;
    }

    // 打底
    getBaseMoney () {

    }

    // 通底
    getAllBaseMoney () {

    }

	// 下注
	xiazhu (money) {
		// 玩家的金额要减少，场上的金额要增多
		this.player.money - money;
	}

	// 弃牌
	qipai () {

	}

	// 跟注
	genzhu () {

	}

	// 大注
	dazhu () {
		
	}
}