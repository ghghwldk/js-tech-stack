//1. forEach
//for문과 같은 순환 문
//형태
// 배열.forEach((element,index)=>{
// 	...
// })

//예시
var arr = [{name:"aaa", number:1111},{name:"bbb", number:2222},{name:"ccc", number:3333} ];

arr.forEach((element,index)=>{
    console.log("element=",element);
    console.log("index=",index);
}) 

// 출력
element= { name: 'aaa', number: 1111 }
index= 0
element= { name: 'bbb', number: 2222 }
index= 1
element= { name: 'ccc', number: 3333 }
index= 2

// 2. map
// map은 배열에서 어떤 과정을 거친 배열을 만들어낼때 많이 쓴다. return 문에 해당하는 값으로 배열을 추가한다. 순환하고 있는 요소를 리턴 값과 바꾼다고 생각하면 이해하기에 편하다.

//형태
// 배열.map((element,index)=>{
// 	...
//   return 만든 배열 값 
// })

var arr = [{name:"aaa", number:1111},{name:"bbb", number:2222},{name:"ccc", number:3333} ];
var mapArr = arr.map((element)=>{
    element.number = element.number*2;
    return element;
})

console.log(mapArr);

//출력
[
  { name: 'aaa', number: 2222 },
  { name: 'bbb', number: 4444 },
  { name: 'ccc', number: 6666 }
]

// 3. filter
// 배열에서 특정 조건에 해당하는 것을 걸러 배열을 만드는 method이다. 중괄호 안에서 true or false를 리턴하면 된다. true인 것을 거른다.

//형태
배열.filter((element, index)=>{
   // 조건...
   return true;
  // 조건...
	return false;
})

//예시
var arr = [{name:"aaa", number:1111},{name:"bbb", number:2222},{name:"ccc", number:3333} ];

var filterArr = arr.filter((element,index)=>{
    console.log(index);
    if(element.number>2000) return true;
    else return false;
})
console.log(filterArr);

//출력
0
1
2
[ { name: 'bbb', number: 2222 }, { name: 'ccc', number: 3333 } ]

// 4. reduce
// 배열을 순회하면서, 한 변수에 어떤 과정을 거칠때 많이 사용한다.
//형태
// 배열.reduce((변수, element)=>{
// 	return 변수로 바꿀 값
// },초기값)

//예시
var arr = [{name:"aaa", number:1111},{name:"bbb", number:2222},{name:"ccc", number:3333} ];


var sumArr = arr.reduce((a,b)=>{
    return a+b.number;
},0);

console.log(sumArr);
