window.onload = function(){
    const string = prompt('문자열을 입력받으면 단어의 갯수를 출력하는 프로그램');
    console.log(string.split(' ').length);
}