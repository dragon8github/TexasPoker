<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <transition-group name="cell" tag="div" class="container">
        <div v-for="p in poker" :key="p.id" class="cell" :data-flower='p.flower' 
        :class="{red: p.flower === '♥' || p.flower === '♦'}">
            <span class="number">{{ p.number }}</span>
        </div>
    </transition-group>
    <button class="shuffle" @click="shuffle"> Shuffle </button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Texas Hold’em poker',
      poker : []
    }
  },
  methods: {
     shuffle () {
       // 利用slice函数克隆一个数组.不要问我为什么要克隆
       let arr = this.poker.slice(0);
       let n = arr.length, random;
       while (0 != n) {
            random =  (Math.random() * n--) >>> 0; // 无符号右移位运算符向下取整
            [arr[n], arr[random]] = [arr[random], arr[n]] // ES6的结构赋值实现变量互换
       }
       this.poker = arr;
     },
     init () {
        const flower = ['♠', '♥', '♣','♦']
        let poker = [];

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
              poker.push({id : f + n, number: n, flower: f})
            }
          }

          // 德州扑克不需要双王
          this.poker = poker
     }
  },
  beforeMount () {
     this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h1, h2 {font-weight: normal; } 

/* 动画钩子 */
.cell-move {
  transition: transform 1s ease;
}

.container {
  display: flex;
  flex-wrap: wrap;  /* #当宽度不够时换行 */
  width: 500px;
  margin: auto; 
}

.cell {
  text-align: center;
  width: 50px;
  height: 60px;
  border: 1px solid #aaa;
  display: flex;
  justify-content: space-around;

  & > .number {
    align-self: center;
  } 

  &::before {
    content:attr(data-flower);
    align-self: flex-start;
  }

  &::after {
    content:attr(data-flower);
    transform: rotateX(180deg);
    align-self: flex-end;
  }
}

button.shuffle {
  margin-top: 40px;
}

.red {
  color:red;
}

</style>
