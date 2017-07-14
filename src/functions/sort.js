// 桶排序
const BucketSort = (arr) => {
    // 存储排序后的数组
    var arr2 = []
        // 桶容器，它的容量是由待排序数组中的最大值＋１决定的
    var book = new Array(Math.max.apply(null, arr) + 1);
    //　初始化桶(m)
    for (var i = 0; i < book.length; i++) book[i] = 0
        // 往桶中插入flag(n)
    for (var i = 0; i < arr.length; i++) book[arr[i]]++
        // 循环桶并且查看flag。打印出桶的当前索引并且放入arr2中(m)
        book.forEach(function(e, index) {
            // 循环桶的flag数量，并且将当前桶的索引放入数组中（n）
            for (var i = 0; i < +e; i++) arr2.push(index)
        })
    return arr2;
}

// 冒泡排序
const BubbleSort = (arr) => {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            let [a, b] = [+arr[j]['number'], +arr[j + 1]['number']]
            // a === 1 是考虑 ‘A’ 的情况。那么A绝对是交换位置从而放再数组后面的
            if (b != 1 && (a > b || a == 1)) {
                var temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            } 
        }
    }
    return arr;
}

module.exports = {
    BucketSort,
    BubbleSort
}