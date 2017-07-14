<template>
  <div class="Home">
    <h1>{{ msg }} {{ AppData.playerCount }}</h1>
    <transition-group name="cell" tag="div" class="container">
        <div v-for="p in poker" :key="p.id" class="cell" :data-flower='p.flower' 
        :class="{red: p.flower === '♥' || p.flower === '♦'}">
            <span class="number">{{ p.name }}</span>
        </div>
    </transition-group>
    <button class="shuffle" @click="shuffle"> Shuffle </button>
  </div>
</template>

<script>

import Compare from '@/functions/Compare'
import DILA from '@/functions/DILA'
import Game from '@/functions/Game'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Texas Hold’em poker',
      poker : [],
      _DILA: null,
      AppData: null
    }
  },
  methods: {
     shuffle () {
       // 让荷官洗牌
       this.poker = this._DILA.Shuffle();
     },
     init () {
        // 新建一个荷官
        this._DILA = new DILA();
        // 荷官拿出一副牌
        this.poker = this._DILA.yieldCards()
        // 创建一盘游戏
        let game = new Game();
        // 设置游戏开始
        game.start();
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
