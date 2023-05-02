// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램
// AAABBBcccddd
window.onload = function () {
    const string = prompt("문자를 입력해주세요.");
    const arr =[];
    let result = '';

    for(let i=0; i<string.length; i++){
        if(string[i] === string[i].toUpperCase()){
            arr.push(string[i].toLowerCase())
        }else{
            arr.push(string[i].toUpperCase())
        }
    }

    /**
     * 타입 변경
     * 배열 -> 문자열
     * 이 방법은? arr.join('')
     */

    for(let j=0; j<arr.length; j++){
        result +=arr[j];
    }
    console.log(result)
}