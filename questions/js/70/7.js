/*
가장 긴 공통 부분 문자열(Longest Common Subsequence)이란 
A, B 두 문자열이 주어졌을 때 
두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 

여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.

이처럼 두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램을 만들어 주세요.
*/

function solution(string) {
    let result = [];
    for (let i = 1; i < string.length + 1; i++) {
        for (let j = 0; j < i; j++) {
            const item = string.slice(j, j + string.length - i + 1);
            result.push(item);
        }
    }
    return result;
}

/*
THISIS

slice(0,6) -> 문자열 길이6

slice(0,5) -> 문자열 길이5
slice(1,6) -> 문자열 길이5

slice(0,4) -> 문자열 길이4
slice(1,5) -> 문자열 길이4
slice(2,6) -> 문자열 길이4
.
.
.

*/

const arrayOne = solution('THISISSTRINGS');
const arrayTwo = solution('THISIS');

//공통 부분 문자열 찾기- 교집합
let intersection = arrayOne.filter(x => arrayTwo.includes(x));

// 공통 부분 문자열 찾기- 교집합 (총개수)
// let intersection = arrayOne.length + arrayTwo.length - new Set([...arrayOne, ...arrayTwo]).size;

//문자열 길이로 내림차순 정렬
// intersection.sort((a, b) => {
//     return b.length - a.length;
// });

console.log("intersection", intersection, intersection.length);
console.log(intersection[0].length); //가장 긴 부분열은 문자열 길이 6인 요소