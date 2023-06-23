/*
문자열을 입력받아서, 같은 문자가 연속적으로 반복되는 경우에 그 반복 횟수를 표시하여 문자열을 압축하기.

입력 예시: aaa bb cccccca

출력 예시: a3b2c6a1
*/

const string = 'aaabbcccccca';
let cnt = 1;
let answer = '';
for (let i = 0; i < string.length; i++) {

    if (string[i] === string[i + 1]) {
        cnt += 1;
    } else {
        answer += string[i] + cnt;
        cnt = 1;
    }
}
console.log(answer)

/*방법2 정규표현식*/
const reg = /(\w)\1*/g;
// \1 재참조 메타 문자
const regAnswer = [...string.matchAll(reg)];
console.log(regAnswer)