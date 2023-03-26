window.onload = function () {
    const number = prompt('그 단의 구구단 결과를 한 줄에 출력하는 프로그램');
    let result = '';
    for (let i = 1; i < 10; i++) {
        result += number * i + ' ';
    }
    console.log(result)
}