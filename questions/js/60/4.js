/**
 * 정량 N이 입력됩니다.
 * 정량 N: 24kg -> 7kg * 3,3kg * 1
 * 가장 적게 옮길 수 있는 횟수를 출력합니다.
   만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.
 */
let n = parseInt(prompt('정량 N이 입력됩니다.'), 10);

let count = 0;
/**
 * while문
 * 1. 7로 나누어 떨어질 경우, 나눈 값을 return.
 * 2. 7로 나누어 떨어지지 않을 경우, 정량 n에서 -3을 하고 횟수를 +1.
 * 3. 정량 n이 0보다 작을 때까지 반복.
 */
while (true) {
    if (n % 7 === 0) {
        count += parseInt(n / 7, 10);
        console.log(count);
        break;
    }
    n -= 3;
    console.log('n', n)
    count += 1;
    if (n < 0) {
        console.log(-1);
        break;
    }
}
