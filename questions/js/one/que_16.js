window.onload = function () {
    // 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

    const n = window.prompt("Write whatever!");
    const reversed = n.split("").reverse().join("");

    if (!n) return false;

    /*
    * split() 문자열을 배열로 만들어 반환하는 메소드,
    * reverse() 배열의 순서를 반전하는 메소드,
    * join() 원소를 붙여 문자열로 반환하는 메소드
     */

    console.log(reversed);
};
