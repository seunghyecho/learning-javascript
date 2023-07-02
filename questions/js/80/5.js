/*
일정한 규칙을 가지고 있는 숫자를 나열하는 놀이를 하는 중입니다.
이전 숫자에서 각 숫자의 개수를 나타내어 숫자로 만들고 다시 그 숫자를 같은 규칙으로 만들며 나열합니다.
이 놀이는 1부터 시작합니다.
다음 수는 1이 1개이기 때문에 '11'이 되고,
 '11'에서 1이 2개이기 때문에 그다음은 '12'가 됩니다.

즉,
1. 1  → (1)
2. 11 → (1이 1개)
3. 12 → (1이 2개)
4. 1121 → (1이 1개 2가 1개)
5. 1321 → (1이 3개 2가 1개)
6. 122131 → (1이 2개 2가 1개 3이 1개)
7. 132231 → (1이 3개 2가 2개 3이 1개)

위와 같이 진행되는 규칙을 통해 진행 횟수 N을 입력받으면 해당되는 수를 출력하세요.

입력
6

출력
122131

*/

function solution(n) {
    let answer = '1';

    if (n === 1) {
        return 1;
    }

    for (let i = 1; i < n; i++) {
        answer = rule(answer);
    }

    return answer;
}

function rule(answer) {
    let answerMax = 9;
    let result = '';

    for (let i = 1; i < answerMax; i++) {
        let reg = new RegExp(i, 'g');
        let count = (answer.match(reg) || []).length;

        if (count >= 1) {
            result = result + String(i) + String(count);
        }
    }
    return result;
}

const user_input = 10;
console.log(solution(user_input));

/*
i=1 answer = 1
reg= /1/g
count ["1"] : length 1
if count >= 1, result = "" + 1 + 1 : 11


i=2 answer = 11
reg= /1/g
count ["1","1"] : length 2
if count >= 1, result = "" + 1 + 2 : 12


i=3, answer = 12
reg= /1/g
count ["1"] : length 1
if count >= 1, result = "" + 1 + 1 : 11
reg= /2/g
count ["2"] : length 1
if count >= 1, result = "11" + 2 + 1 : 1121


i=4, answer = 1121
reg= /1/g
count ["1","1","1"] : length 3
if count >= 1, result = "" + 1 + 3 : 13
reg= /2/g
count ["2"] : length 1
if count >= 1, result = "13" + 2 + 1 : 1321


i=5, answer = 1321
reg= /1/g
count ["1","1"] : length 2
if count >= 1, result = "" + 1 + 2 : 12
reg= /2/g
count ["2"] : length 1
if count >= 1, result = "12" + 2 + 1 : 1221
reg= /3/g
count ["3"] : length 1
if count >= 1, result = "1221" + 3 + 1 : 122131

i=6, answer = 122131
*/