// 状态管理工具vuex
import store from '../store/index.js';

/**
 * 公共类，存储一些场上的形式和状态，譬如目前场上多少钱。卡组还剩下多少牌，目前还剩下几张没有翻盖
 * 必须是单例模式。只能返回唯一一个实例
 */
class Game {
      constructor () {
          
      }

      // 开始
      start () {
        store.dispatch('setAppData', {
          isStart: true
        })
      }

      // 重新开始
      reStart () {

      }

      // 结束这一局
      end () {

      }
}

module.exports = Game