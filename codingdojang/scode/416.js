/*
다음과 같은 형태의 배열을

[a1,a2,a3...,an,b1,b2...bn]

다음과 같은 형태로 바꾸시오

[a1,b1,a2,b2.....an,bn]

단, should be in-place. 
입력을 저장하는 저장소 이외에 추가적인 저장장소를 사용치 않는다는게 제약조건입니다.

*/

/* swap 방법1, flat */
let list = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5'];
const zip = (a, b) => a.map((v, i) => [v, b[i]]); // a, b가 순회 가능한 iterable 객체가 들어옴. zip(['a1', 'a2', 'a3', 'a4', 'a5'], ['b1', 'b2', 'b3', 'b4', 'b5'])

let list1 = list.slice(0, list.length / 2);
let list2 = list.slice(list.length / 2);

zip(list1, list2).flat(2) //2차원 배열 zip(list1, list2)을 1차원 배열로 바꾸려면

console.log(zip(list1, list2).flat(2))


/* swap 방법2,  */
const arr = [10, 20, 30, 40, 50];
temp = arr[0];

arr[0] = arr[1]
arr[1] = temp

// 이중 for 문
[arr[1], arr[2]] = [arr[2], arr[1]] 
