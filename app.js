'use strict';
//メモ化して計算速度をUPさせる。0 番目と 1 番目の答えは予め定義。n をキーとした答えを持っていればその値をそのまま関数の値として返し、 そうでない場合は、再帰関数を計算して値を求め、それを Map に格納した後に返す
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
  if(memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}




/*'use strict';　//エラーを見つけてくれるモード

//フィボナッチ数列を普通に計算させると速度遅い
//0の時は0　と　1の時は１　と計算はさせずに条件に当てはめるのがルール

function fib(n){
    if (n === 0){
        return 0;
    }else if (n === 1){
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
};
//0から40まで出す。for文（繰り返し）を使う
//違う値でも試せるようにlengthを使う
const length = 40;
for(let i =0; i <= length; i++){
    console.log(fib(i));　　//console.log(i + '番目:' + fib(i));  にすると何番目かも表示可能
}

//途中動くか確認するとき↓
//console.log(fib(0));
//console.log(fib(1));
//console.log(fib(2));
// console.log(fib(3));*/