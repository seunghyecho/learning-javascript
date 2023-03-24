window.onload = function () {
    const string = prompt('거꾸로 출력하는 프로그램').split(' ').reverse(); // 문자 배열 타입
    let result = '';
    for (let i = 0; i < string.length; i++) {
        result += string[i]; // 한 문자로 생성
        console.log(string, string[i], result)
    }
}