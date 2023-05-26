window.onload = function () {
    /**
     *  문자열을 입력받고 연속되는 문자열을 압축하기
     *  입력
        aaabbbbcdddd

        출력
        a3b4c1d4
     */

    const string = 'aaabbbbcdddd'
    let result = '';// 압축한 문자열을 받음.
    let store = string[0];// store 변수에 첫 문자열을 저장함.
    let count = 0;

    for (let i of string) {
        if (i === store) {
            //첫번째 문자열과 저장된 첫 문자열 비교해서 같으면 +1씩 카운트됨.
            count += 1;
        } else {
            //첫번째 문자열과 저장된 첫 문자열 비교해서 같지 않으면
            //result에 "같지 않은 문자열 + 카운트된 값"이 누적됨.
            result += store + String(count);
            // store 변수에 같지 않은 문자열 해당 문자열을 저장함.
            store = i;
            // 같지 않은 문자열의 count는 1부터 시작.
            count = 1;
        }
    }

    result += store + String(count); //마지막 루프 결과를 반환
    console.log("압축한 문자열: ", result);
}
