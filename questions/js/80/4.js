/*
소정이는 어떤 숫자에서 k개의 수를 뽑았을 때 가장 큰 수를 찾는 놀이를 하고 있습니다. 
예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23]을 만들 수 있습니다.
이 중 가장 큰 수는 73입니다.

위 예시처럼 어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수를 찾아 주세요.
 */

/**
 * 일단, 어떤 수 number에서 가장 큰 수 구해보기
 * @param {*} number 
 */
function myFunc(number) {
    const result = [];
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            result.push(Number(number[i] + number[j]))
        }
    }
    console.log("max?", Math.max(...result));
}

myFunc('1723');


/** 답안 */
function solution(chars) {
    let arr = [];

    const f = (prefix, chars) => {
        for (let i = 0; i < chars.length; i++) {
            arr.push(prefix + chars[i]);

            if (arr.indexOf(chars[i] + prefix) === -1) {
                arr.push(chars[i] + prefix);
                // arr에 push 후 i는 1증가
            }
            f(prefix + chars[i], chars.slice(i + 1));
        }
    }

    f('', chars);

    let result = arr.filter(x => x.length === 2);
    result.sort((a, b) => { return b - a });

    return console.log(" result[0]??", result[0]);
}
solution('1723');