window.onload = function () {
    /**
     *  문자열을 입력받고 연속되는 문자열을 압축하기
     *  입력
        aaabbbbcdddd

        출력
        a3b4c1d4
     */

    const string = 'aaabbbbcdddd';
    let result = '';
    let count = 1;

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === string.charAt(i + 1)) {
            count++;
        } else {
            result += string.charAt(i) + count
            count = 1;
        }
    }
    console.log("압축한 문자열: ", result);
}
