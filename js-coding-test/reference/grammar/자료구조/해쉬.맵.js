// 1. set => 값 추가
// 맵객체.set(key, value)
var map = new Map()

map.set(1, "value1")
map.set(2, "value2")

console.log(map)

// 2. get => value 획득
// 맵 객체.get(key)
var map = new Map()

map.set(1, "value1")
map.set(2, "value2")

console.log(map.get(2))

// 3. has => 값 있는지 체크
// 맵객체.has(key)

var map = new Map()

map.set(1, "value1")
map.set(2, "value2")

console.log(map.has(2))
console.log(map.has(3))

// 4. delete => 값 지우기
//맵 객체.delete(key);

var map = new Map();

map.set(1,"value1");
map.set(2,"value2");

map.delete(2);

console.log(map.has(2));
// => false

//5. size => Map의 요소 개수
//형태
//맵 객체.size;

//예시
var map = new Map();

map.set(1,"value1");
map.set(2,"value2");

console.log(map.size);
// => 2
// map의 개수를 구한다. 단, 함수형태로 호출해선 안된다. 주의해야한다.

//6. Map 객체 순환하기
//형태
//for(let [key,value] of 맵 객체){...}

//예시
var map = new Map();

map.set(1,{id:"aaa",password:1111});
map.set(2,{id:"bbb",password:2222});
map.set(3,{id:"ccc",password:3333});


for(let[key,value] of map){
    console.log(value.id);
}
// => aaa
// => bbb
// => ccc
// 7. Map 정렬하기
//형태 => 배열로 만들어서 정렬하고 다시 Map객체로 바꿈
//var arr = [...맵 객체];
//arr.sort(...);
//var newMap = new Map(arr);
         

//예시
var map = new Map();

map.set(1,{id:"aaa",password:2222});
map.set(2,{id:"bbb",password:3333});
map.set(3,{id:"ccc",password:1111});

var arr = [...map];
arr.sort((a,b)=>{
    if(a[1].password<b[1].password){
        return 1;
    }
    else return -1;
})

var newMap = new Map(arr);

console.log(newMap);

// 출력
// Map(3) {
//   2 => { id: 'bbb', password: 3333 },
//   1 => { id: 'aaa', password: 2222 },
//   3 => { id: 'ccc', password: 1111 }
// }