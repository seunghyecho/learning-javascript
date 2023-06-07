/**
 * 행사에서 진행된 악수의 횟수를 받아서 민규가 한 악수의 횟수와 참가자의 수를 반환하는 함수
 * 
 * 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한 번씩 악수를 할 경우,
 * 악수는 두명이서 하기 떄문에 악수할 두 명을 선택한다. 
 * 악수 할 n명과 악수 할 상대방 n-1명을 곱하고,
 * 중복을 방지하도록 나누기 2를 한다면 사람들이 총 악수한 횟수를 알 수 있다.
 * 즉, 악수한 총횟수는 nC2.
 * 
 * 악수의 횟수가 실제 (조합을 통해 나온)악수의 총횟수보다 작으면 반복문을 멈추고,
 * 악수의 횟수가 실제 (조합을 통해 나온)악수의 총횟수보다 많다면 참가자의 수를 1씩 더하고, 
 * 변수 prevShake 에 악수한 횟수를 값으로 할당한다.
 * 반복문을 멈추고 값을 리턴하면, 악수의 횟수와 악수를 한 참가자의 수가 반환된다.
 */

/**
 * @param { n } n 
 * @returns { Array<number> }
 */
function handShake(n) {
    let people = 0;
    let shake = 0;
    let prevShake = 0;
    while (true) {
        shake = people * (people - 1) / 2;
        if (n < shake) {
            break;
        }

        people++;
        prevShake = shake;
    }
    return [n - prevShake, people]
}

const n = 59;
// const n = prompt('행사에서 진행된 악수의 횟수는');
console.log('행사에서 진행된 악수의 횟수는:', n, handShake(n))