//1. add => 값 추가
//형태
//셋 객체.add(value);

//예시
var set = new Set();

set.add("value1");
set.add("value2");

console.log(set);
// => Set(2) { 'value1', 'value2' }
Set객체.add(value) 형태로 넣어주면 된다.

//2. has => 값 있는지 체크
//형태
//셋 객체.has(value);

//예시
var set = new Set();

set.add("value1");
set.add("value2");

console.log(set.has("value1"));
// => true
console.log(set.has("value3"));
// => false
//인자로 받은 value가 있는지 체크 true/false 리턴

//3. delete => 값 지우기
//형태
//셋 객체.delete(values);

//예시
var set = new Set();

set.add("value1");
set.add("value2");

set.delete("value2");

console.log(set.has("value2"));
// => false
//원하는 value에 대한 값을 지운다.

//4. size => Map의 요소 개수
//형태
//셋 객체.size;

//예시
var set = new Set();

set.add("value1");
set.add("value2");

console.log(set.size);
// => 2
//set의 요소 개수를 구한다. 단, 맵과 마찬가지로 함수형태로 호출해선 안된다. 주의해야한다.

//5. Set 객체 순환하기
//형태
//for(let value of 셋 객체){...}

//예시
var set = new Set();

set.add({id:"aaa",password:1111});
set.add({id:"bbb",password:2222});
set.add({id:"ccc",password:3333});

for(let value of set){
    console.log(value.id);
}
// => aaa
// => bbb
// => ccc
//6. Set 정렬하기
//맵과 마찬가지로 배열로 갔다가 정렬하고 다시 Set으로 오는 과정을 취한다.

//형태 => 배열로 만들어서 정렬하고 다시 Set객체로 바꿈
//var arr = [...셋 객체];
//arr.sort(...);
var newSet = new Set(arr);
         

//예시
var set = new Set();

set.add({id:"aaa",password:2222});
set.add({id:"bbb",password:1111});
set.add({id:"ccc",password:3333});

var sortArr = [...set];
sortArr.sort((a,b)=>{
    if(a.password>b.password){
        return 1;
    }
    else{
        return -1;
    }
})

var newSet = new Set(sortArr);
console.log(newSet);

// 출력
Set(3) {
  { id: 'bbb', password: 1111 },
  { id: 'aaa', password: 2222 },
  { id: 'ccc', password: 3333 }
}