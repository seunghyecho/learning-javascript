window.onload = function () {
    /**
     * 숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.
     * 예를 들어, 123456789 를 입력받았으면 123,456,789를 출력해 주세요.
     */

    const number = prompt('천 단위로 콤마(,)를 찍어주세요');
    if (!number) return null;

    /**
    * 정규표현식 사용
    */
    function priceToString(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    console.log("정규표현식 사용", priceToString(number));

    /**
     * split,join 사용(소수점이 있을 경우)
     */
    function addComma(value) {
        let splitValue = value.toString().split('.');
        splitValue[0] = splitValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return splitValue.join('.')
    }
    console.log("split,join 사용", addComma(number));


    /**
     * 내장함수 사용
     */
    console.log("내장함수 사용", Number(number).toLocaleString('ko-KR'));

    /**
     * 재귀함수 사용
     */
    function comma(n) {
        if (n.length <= 3) {
            return n;
        } else {
            return comma(n.slice(0, n.length - 3)) + ',' + n.slice(n.length - 3)
        }
    }
    console.log("재귀함수 사용", comma(number))
}