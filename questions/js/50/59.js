window.onload = function () {
    /**
     * 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 
     * 나머지 빈 부분에는 '='을 채워 넣어주세요.
     * 
     * padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
     * padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움
     *
     * ========================hi========================
     */
    const string = prompt('문자열을 입력해주세요.');
    if (!string) return false;

    const n = 25 + (string.length / 2); // 중앙 정렬을 위한 문자열 반띵.

    const leftStr = string.padStart(n, '=');
    console.log(leftStr.padEnd(50, '=')) // 총 문자열 길이 50에서 나머지 부분을 =로 채움.
}