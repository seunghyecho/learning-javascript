/*

수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다.
괄호는 소괄호와 중괄호가 있습니다.

입출력 예시
데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7 * {(3 * 5)}
True

데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7){ * (3 * 5)
False

데이터 입력(1), 프로그램 종료(2) : 2

*/


/**
 * 수학 괄호 파싱 2
 * @param {*} str 
 * @returns 
 */

function solution(str) {
    const bracket = {
        ')': '(',
        '}': '{',
    };
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        const item = str[i];

        if (item.includes('(') || item.includes('{')) {
            // 괄호가 열린거
            stack.push(item);

        } else if (bracket[item]) {
            // 괄호가 닫힌거
            console.log(stack); // ['{', '(']
            console.log(bracket[item]) // (

            if (stack.length === 0) {
                return false;
            } else {
                if (bracket[item] != stack.pop()) {
                    // stack의 길이가 0일 때 stack.pop()은 undefined
                    // stack의 길이에 대한 예외처리도 함께
                    return false;
                }
            }
        }
    }

    if (stack.length == 0) {
        return true;
    }
    return false;

}

const ex = prompt('데이터를 입력하세요 5 + 7{ * (3 * 5)');
console.log(solution(ex));
// 5 + 7 * {(3 * 5)}
// 5 + 7){ * (3 * 5)