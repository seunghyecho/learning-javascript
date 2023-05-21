window.onload = function () {
    /**
     * 0부터 1000까지 1의 개수를 세는 프로그램
     */
    let arr = {};
    for (let i = 0; i <= 20; i++) {
        arr += i; // 하나의 문자열로 이어 붙인다.
    }

    let count = 0;
    /**
     *  for ...of 반복문 사용
     *  string에 대해 반복
     *  즉, [Symbol.iterator] 속성을 가져야만하는 컬렉션 전용
     *  item == 1인 경우를 찾으면 된다.
     */

    // for (let item of arr) {
    //     if (item == 1) {
    //         count++;
    //     }
    // }

    /**
     *  for ...in 반복문  사용
     *  객체의 key 값에 접근할 수 있지만, value 값에 접근하는 방법은 제공하지 않는 구문
     *  즉, 객체의 모든 열거 가능한 속성에 대해 반복
     *  arr[item] == 1인 경우를 찾으면 된다.
     */

    for (let item in arr) {
        if (arr[item] == 1) {
            count++;
        }
    }

    console.log("count", count)

    /**
     * 정규표현식
     */

    console.log("정규표현식:", arr.match(/1/g).length)

}