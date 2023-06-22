/*
    조합이란 원소들을 조합하여 만들 수 있는 경우의 수이며 원소의 순서는 신경 쓰지 않습니다.
    순열이란 원소의 값이 같더라도 순서가 다르면 서로 다른 원소로 취급하는 선택법입니다.

    한글의 자모 24자 중 자음은 총 14개입니다.
    이 중 입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하고 싶습니다.

    요구 조건
    1. 첫 번째 입력으로 선택할 한글 자음이 주어집니다.
    2. 두 번째 입력으로 조합의 수가 주어집니다.
    3. 주어진 조합의 수에 따라 조합과 조합의 수를 출력해 주세요.

    입력
    ㄱ,ㄴ,ㄷ,ㄹ
    3

    출력
    ['ㄱㄴㄷ', 'ㄱㄴㄹ', 'ㄱㄷㄹ', 'ㄴㄷㄹ']
    4
*/

function combination(c, n) {
    const chars = c.split(',');
    let combi = [];

    const getCombination = (prefix, chars) => {
        console.log("prefix:", prefix, "chars:", chars)

        for (let i = 0; i < chars.length; i++) {
            combi.push(prefix + chars[i]);
            getCombination(prefix + chars[i], chars.slice(i + 1));
        }
    }

    getCombination('', chars);

    // 조합의 수에 맞는 것만 추출!
    // combi : ['ㄱ', 'ㄱㄴ', 'ㄱㄴㄷ', 'ㄱㄴㄷㄹ', 'ㄱㄴㄹ', 'ㄱㄷ', 'ㄱㄷㄹ', 'ㄱㄹ', 'ㄴ', 'ㄴㄷ', 'ㄴㄷㄹ', 'ㄴㄹ', 'ㄷ', 'ㄷㄹ', 'ㄹ']
    const result = combi.filter(x => x.length === n);
    console.log("result", result);

    return result.length;
}


console.log(combination('ㄱ,ㄴ,ㄷ,ㄹ', 3));