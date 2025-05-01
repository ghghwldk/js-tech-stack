// 1. substr
// 시작 인덱스부터 해당 길이만큼 자른다.
// 문자열.substr(시작위치, 길이)

var str = "0123456789"

str.substr(시작위치, 길이);
str.substr(시작위치);

// 2. substring
// 문자열.substring(시작위치, 종료위치)
var str = "0123456789"

str.substr(시작위치, 종료위치)
str.substr(시작위치)

console.log(str.substring(1, 3))

// 3. slice
// 문자열.slice(시작위치, 종료위치)
var str = "0123456789"

// str.slice(시작위치, 종료위치)
// str.slice(시작위치)

console.log(str.slice(1, 3))