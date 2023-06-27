/**
 * Ugly Numbers
 * https://codingdojang.com/scode/436
 * 
 * 심술쟁이 수는 2,3,5의 곱으로 만들 수 있는 수이다. 다음과 같은 순서의 수가 11개의 심술쟁이 수이다.

    1,2,3,4,5,6,8,9,10,12,15,....

    처음 수는 1로 시작하도록 한다. 입력은 받지 않고, <number> 에 1500번째 심술쟁이 수가 출력되게 한다.

    Sample Output

    The 1500'th ugly number is <number>.
    답

    859963392
    (1550번째는 1093500000, 십만번째는 290142196707511001929482240000000000000)

 */

function uglyNumber(n) {
    let uglyNumberList = [1];
    for (let i = 0; i < n - 1; i++) {
        let last = uglyNumberList.slice(-1);

        let temp = [];
        for (let i of uglyNumberList) {
            for (let j of [i * 2, i * 3, i * 5]) {
                if (j > last) {
                    temp.push(j)
                }
            }
        }
        //[1,2,3,4]
        uglyNumberList.push(Math.min(...temp))
        console.log(uglyNumberList);

    }
    return uglyNumberList.slice(-1)
}
console.log(uglyNumber(20));