/**
 * 德州扑克胜利的规则：
 * 1、 自己手中的牌与场上牌合计5张，全场最大的赢
 * 2、 先获取每个玩家手中的牌隶属哪个最大的规则。然后对比。如果玩家规则大小依然一致，则按规则1对比。
 * 3、 德州扑克没有花色的大小之分。所以有【平局】的概率
 * 4、 使用策略模式封装每一个算法: 七张卡中，满足算法的就属于该规则
 * 5、 无论获取到什么手牌，先进行排序，再查看对子，再查看颜色。然后再说
 *
 * 思路点评：
 * 	1、场上5张牌加上玩家手中两张牌，共七张牌先从大到小排序
 * 	2、考虑一点，当场上的牌最大，我们需要对比手里的牌的大小。不算对子，只能单条对比。
 * 	   换句话说，除了对比所有玩家的牌的组合强度，还要对比场上的牌自身的组合强度。当场上的牌强度最大时，玩家的规则变成单条比大小
 * 	3、按照我们人脑的逻辑来判断牌面的大小。当手牌的组合 多样时，只能算最大的那样。
 * 	   所以要从大到小来判断，既然是顺序判断，自然是外部迭代器模式 + 策略模式
 * 	   不要想太多，就按从大到小判断。并且先逐一实现算法。
 	4、不需要判断是否单条，如果前面的规则都没通过，说明一定是单条
 */
import {BubbleSort} from '@/functions/sort'

class Compare {

	// 构造函数
	constructor (poker) {
	    // 先进行从大到小排序(A是排在最后面的)
	    this.$_poker = BubbleSort(poker)

	    // 存储公共的牌
	    this.$_commonPoker = [];
	    for (let p of this.$_poker) {
	    	if (p.status === 'common') this.$_commonPoker.push(p)
	    }

		// 储存牌和每个牌的数量
		this.$_cards = {};
		for (let p of this.$_poker) {
		   if (!this.$_cards[p.name]) this.$_cards[p.name] = {count: 1}
		   else this.$_cards[p.name].count++
		}
	}

	is (n) {
		for (let [key, value] of Object.entries(this.$_cards)) {
		    if (value.count == n) {
		    	return true;
		    }
		}
		return false;
	}

	// 规则2 ： 对子
	duizi () {
		console.log(this.is(2));
	}

	// 规则3： 两对
	liangdui () {
		
	}

	/**
	规则4 ： 三条
	let _compare = new Compare([
	   {id: '♣Q', number:'12', flower:'♣', name:'Q', status: 'common'},
	   {id: '♦A', number:'1', flower:'♦', name:'A', status: 'self'},
	   {id: '♦9', number:'9', flower:'♦', name:'9', status: 'common'},
	   {id: '♠10', number:'10', flower:'♠', name:'10', status: 'common'},
	   {id: '♥6', number:'6', flower:'♥', name:'6', status: 'common'}, 
	   {id: '♦6', number:'6', flower:'♦', name:'6', status: 'self'}, 
	   {id: '♠6', number:'6', flower:'♠', name:'6', status: 'common'}, 
	]);
	console.log(_compare.santiao());
	 */
	santiao () {
		this.is(3)
	}

	/**
	 * 规则5 ： 顺子
	 * @test
	      let _compare = new Compare([
	         {id: '♣Q', number:'12', flower:'♣', name:'Q', status: 'common'},
	         {id: '♦A', number:'1', flower:'♦', name:'A', status: 'self'},
	         {id: '♦9', number:'9', flower:'♦', name:'9', status: 'common'},
	         {id: '♠10', number:'10', flower:'♠', name:'10', status: 'common'},
	         {id: '♥J', number:'11', flower:'♥', name:'J', status: 'common'}, 
	         {id: '♦K', number:'13', flower:'♦', name:'K', status: 'self'}, 
	         {id: '♠6', number:'6', flower:'♠', name:'6', status: 'common'}, 
	      ]);
	      console.log(_compare.shunzi());
	 }
	 */
	shunzi () {
		let flag = 0
		let cards = []
		// 计算花色
		for (let p of this.$_poker) { 
		   cards.push(p.number)
		}

		for (let [index, ele] of cards.entries()) {
			let [t1, t2] = [cards[index], cards[index + 1]]
			if (t1 === t2) continue
				if (index != cards.length - 1 && (t1 - t2 === -1 || t1 - t2 === 12)) {
				flag++
				if (flag >= 5) {
				 console.log("恭喜你是顺子")
				 return true; 
				}
			} else {
				flag = 0
			}
		}
		return false;
	}
	
	/**
	 * 规则6 ： 同花
	 * let _compare = new Compare([
          {id: '♦9', number:'9', flower:'♦', name:'9', status: 'common'},
          {id: '♠A', number:'1', flower:'♦', name:'A', status: 'common'}, 
          {id: '♦5', number:'5', flower:'♦', name:'5', status: 'common'},
          {id: '♥4', number:'4', flower:'♥', name:'4', status: 'common'}, 
          {id: '♣7', number:'7', flower:'♣', name:'7', status: 'common'}, 
          {id: '♦4', number:'4', flower:'♦', name:'4', status: 'self'}, 
          {id: '♦7', number:'7', flower:'♦', name:'7', status: 'self'}
       ]);
       console.log(_compare.tonghua());	
	 */
	tonghua () {
		// 初始化
		let cards = {
		    '♠': { count:0, name: null }, 
		    '♥': { count:0, name: null }, 
		    '♣': { count:0, name: null },
		    '♦': { count:0, name: null }
		}

		// 计算花色
		for (let p of this.$_poker) { 
		    // 累加同色花的数量
		    cards[p.flower].count++ 

		    // 由于this.poker是已经从小到大排序过的，所以直接替换赋值即可。
		    // 这样一来, 到最后拿到的值肯定是最大的手牌
		    cards[p.flower].name = p.name;
		}

		// 遍历花色
		for (let [key, value] of Object.entries(cards)) {
		    if (value.count >= 5) {
		    	console.log (`你的手牌是同花：${key}  你最大的同花牌是：${key}${value.name}`);
		    	return true;
		    }
		}

		return false;
	}

	// 规则7 ： 葫芦
	hulu () {
		console.log('葫芦')
	}

	/**
	 * 规则8 ： 炸弹
	 * let _compare = new Compare([
          {id: '♦9', number:'9', flower:'♦', name:'9', status: 'common'},
          {id: '♠6', number:'6', flower:'♠', name:'6', status: 'common'}, 
          {id: '♠7', number:'7', flower:'♠', name:'7', status: 'common'},
          {id: '♥7', number:'7', flower:'♥', name:'7', status: 'common'}, 
          {id: '♣7', number:'7', flower:'♣', name:'7', status: 'common'},
          {id: '♦4', number:'4', flower:'♦', name:'4', status: 'self'}, 
          {id: '♦7', number:'7', flower:'♦', name:'7', status: 'self'}
       ]);
       console.log(_compare.zhadan());
	 */
	zhadan () {
		this.is(4)
	}

	// 规则9 ： 同花顺
	tonghuashun () {
		console.log('同花顺')
	}
}

export default Compare