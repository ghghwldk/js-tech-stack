// 1. indexOf
// 문자열.indexOf(찾는문자열)
var str = "abcdefghijklmop"
console.log(str.indexOf("cde"))

// 2. includes
// 문자열.includes(찾는 문자열)

var str = "abcdefghijklmop"
console.log(str.includes("cde"))

// 3. replace
// 문자열.replace(찾는 문자열, 바꿀 문자열)
var str = "abcdefghijklmop"
console.log(str.replace("cde", "change"))


// 4. split
// 문자열.split(기준 문자열)
var str = "111a222a333a444"
console.log(str.split("a"))

// 5. repeat
// 문자열.repeat(반복횟수)
var str = "123";
console.log(str.repeat(3))
