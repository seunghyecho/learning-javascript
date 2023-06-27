/**
 * Happy Number
 * https://codingdojang.com/scode/496
 * 
 * 예를 들어, 7에서 시작하게 되면 다음과 같은 일련의 순서를 가지게 되며

    7, 49(=7^2), 97(=4^2+9^2), 130(=9^2+7^2), 10(=1^2+3^2), 1(=1^2), 따라서 7은 즐거운 수이다.

    더할숫자 [49]
    []

    더할숫자: [16,81]
    제곱의합리스트: [더한숫자: 49]

    [81,49]
    [49,97]

    [1,9,0]
    [49,97,130]

    [1,0]
    [49,97,130,10]

    [1,0]
    [49,97,130,10,1]

    그리고 4는

    4, 16(4^2), 37(1^2+6^2), 58(3^2+7^2), 89(5^2+8^2), 145(8^2+9^2), 42(1^2+4^2+5^2), 20(4^2+2^2), 4(2^2)의 순서로 반복되므로 Unhappy Number이다
 */

function happyNumber(입력숫자) {
    let 더할숫자 = [];
    let 더한숫자 = 입력숫자;
    let 제곱의합리스트 = [];
    while (더한숫자 != '1') {
        for (let i of 더한숫자) {
            let square = parseInt(i) ** 2;
            더할숫자.push(square);
        }
        더한숫자 = String(더할숫자.reduce((a, b) => a + b, 0));
        더할숫자 = [];
        if (더한숫자 == 입력숫자) {
            return false;
        }
        for (let i of 제곱의합리스트) {
            if (i === 더한숫자) {
                return false
            }
        }
        제곱의합리스트.push(더한숫자)
    }
    return true;
}

happyNumber(String(7))
happyNumber(String(4))
happyNumber(String(13))

let testcase = [3, 7, 4, 13];
for (let i = 0; i < testcase.length; i++) {
    if (happyNumber(String(testcase[i]))) {
        console.log(`Case#${i + 1} : ${testcase[i]} is Happy number.`);
    } else {
        console.log(`Case#${i + 1} : ${testcase[i]} is unHappy number.`);
    }
}