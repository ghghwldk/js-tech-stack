// 1. new Array()
var arr= new Array(3).fill(5);
console.log(arr);


// 2. Array.from
// 이는 인자에 따라 배열을 생성하는 방식이 달라진다.

// 2.1. length 인자 던져주기
// Array.from({length:배열 개수},넣을 함수)
var arr= Array.from({length:5},(value,index)=>index);
console.log(arr);

// 2.2. 다른 배열 던져주기
// 길이 대신에 배열을 던져줘서 map 메소드처럼 사용할 수 있다.
var otherArr = [1,2,3,4,5];
var arr= Array.from(otherArr,(element,index)=>element*2);
console.log(arr);
// => [ 2, 4, 6, 8, 10 ]