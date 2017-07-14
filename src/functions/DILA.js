class DILA {

    // 产牌
    yieldCards () {
        if (!this.$_poker) {
            this.$_poker = [];
            const flower = ['♠', '♥', '♣','♦']
            // 外部循环四个花色
            for (var j = 0; j < 4; j++) {
              // 获取当前花色
              let f = flower[j]
              // 内部循环13张咯
              for (var i = 1; i <= 13; i++) {
                  let n = i;
                  switch (n) {
                    case  1 : n = 'A'; break;
                    case 11 : n = 'J'; break;
                    case 12 : n = 'Q'; break;
                    case 13 : n = 'K'; break;
                  }
                  this.$_poker.push({id : f + n, number: i, flower: f, name: n})
                }
              }
          }
          return this.$_poker
    }

	// 洗牌
    Shuffle () {
        // 利用slice函数克隆一个数组.不要问我为什么要克隆
        let arr = this.$_poker.slice(0);
        let n = arr.length, random;
        while (0 != n) {
             random =  (Math.random() * n--) >>> 0; // 无符号右移位运算符向下取整
             [arr[n], arr[random]] = [arr[random], arr[n]] // ES6的结构赋值实现变量互换
        }
        this.$_poker = arr;
        return this.$_poker;
    }

	// 发牌

	// 宣布结果
}

module.exports = DILA