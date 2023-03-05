window.onload = function () {
    const str = window.prompt('Write string'); //Javascript
    //A
    for (let i = 0; i < str.length - 1; i++) { //만약 -1이 없으면 마지막 i+1에서 undefined가 출력되는 문제가 발생
        console.log(str[i], str[i + 1]) //문자열에서 2개의 연속된 요소를 출력하는 방법
    }
}