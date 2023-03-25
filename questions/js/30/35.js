window.onload = function () {
    // 함수가 객체를 반환할 때 이것을 팩토리 함수라고 부른다.
    // pow 는 특정숫자의 거듭제곱 값을 계산해주는 함수이며,
    // sqrt 는 특정숫자의 제곱근 값을 계산해주는 함수
    function one(n) {
        function two(value) {
            console.log(value, n)
            return Math.pow(value, n)
        }

        return two;
    }

    const a = one(2);
    const b = one(3);
    const c = one(4);

    console.log("a(10) :", a(10)); // 2제곱
    console.log("b(10) :", b(10)); // 3제곱
    console.log("c(10) :", c(10)); // 4제곱
}