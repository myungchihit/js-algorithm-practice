/*
  for(let i=0 ; i < arr.length ; i++)
  for(let x of arr)
*/

/*
  forEach()
  a.forEach(function(v, i){
    console.log(v, i, this); // this에 [1, 2]가 바인딩된다.
  } , [1, 2]);
*/

/*
  map()
  map은 새로운 배열을 반환한다.
  반환되는 원본 배열과 길이가 무조건 같다 
    ==> if문으로 조건을 줄 경우 조건이 if문의 false이면 undefined를 반환한다.
  
  let answer = a.map(function (v, i){
    if(v % 2 == 0) return v;
  }, [1,2]);
*/

/*
  filter()
  filter는 배열의 원소중 조건의 참인 경우의 값을 새로운 배열에 반환
  map과는 달리 if문의 조건이 true인 값만 반환하여 원본과 배열 길이가 다를 수 있다.
  
  let answer = a.filter(function (v, i){
      return v % 2 === 0;
  }, [1,2]);
*/

/*
  reduce()
  reduce는 어떤 값을 생성해서 리턴한다.

  let answer = a.reduce(function (acc, v){
      return acc + v;
  }, 0);  // 0으로 초기화 (초기값)

*/


/**
  Math.round() : 반올림
  Math.ceil() : 올림
  Math.floor() : 버림
  Number.prototype.toFixed(x): 주어진 값의 길이만큼 소수점 자리수를 반올림하여 반환
*/

/*
  Number.MAX_SAFE_INTEGER : 
*/