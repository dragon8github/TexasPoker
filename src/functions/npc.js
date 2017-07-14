class Npc {

    constructor () {
        // 输的次数累计
        this.loseTime = 0
        // 赢的次数累计
        this.winTime = 0
        // 连续赢了N盘
        this.repWinTime = 0
        // 连续输了N盘
        this.repLoseTime = 0
        // 当前金额
        this.money = 0
        // 愤怒值
        this.anger = 0
        // 手牌等级
        this.cardsLevel = 0
    }

	// 正常模式
    normal_mode () {

    } 

	// 怂逼模式
    loseer_mode () {

    }

	// 偷鸡模式
    Bluff_mode () {

    }

	// 暴走模式
    anger_mode () {

    }

	// 钓鱼模式
    fishing_mode () {
        
    }
}

