// 1. charCodeAt
// 문자열.charCodeAt()
var str = "A"
console.log(str.charCodeAt())
// 해당 문자열을 아스키코드로 바꿨을 때 값을 리턴한다.


// 2. String.fromCharCode
String.fromCharCode(숫자)

var str = "A";
var num = str.charCodeAt()
console.log(String.fromCharCode(num));
// 원하는 숫자에 대한 아스키 값을 리턴한다.

// 3. toString
// 숫자.toString(변환 형태 숫자)
var num = 10;
console.log(num.toString(2))
/*
원하는 숫자를 원하는 진수형태로 변환 가능
값을 넣지 않을 시, 똑같은 숫자를 문자열로만 변환
*/