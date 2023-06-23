/*
1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. 
(단 점들의 배열은 모두 정렬되어있다고 가정한다.)

예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.
*/

const arr = [1, 3, 4, 8, 13, 17, 20];

/* 방법1 */
let index = 0;
let min = Infinity;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] < min) {
        index = i;
        min = arr[i] - arr[i - 1];
    }
}

console.log(arr[index], arr[index - 1])



/* 방법2 */
const sliced = arr.slice(1);
const answer = arr.map((v, i) => [v, sliced[i]])
    .sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]));

console.log(answer[0]);


