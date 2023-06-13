/**
 * 1. 정렬
 * 1-1. 배열 중 가장 작은 값을 찾는다.
 * 1-2. 찾으면 새 배열에 넣는다.
 * 1-3. 원래 배열에 찾은 값은 지운다.
 * 1-4. 만약 원래 배열 길이만큼 반복했으면 끝내고, 아니면 1-1로 돌아간다.
 * 
 * -1000 < array 원소 < 1000 일 경우
 * 입력 [9, -1, 9]
 */

const array = [9, -1, 9];
function solution(array) {
    let arrayCnt = 0;
    let newArray = [];

    // 1-4. 만약 원래 배열 길이만큼 반복했으면 끝내고, 아니면 1-1로 돌아간다.
    while (arrayCnt < array.length) {

        // 1-1. 배열 중 가장 작은 값을 찾는다.
        let min = 1000; // 가장 큰 숫자의 경우를 넣어줌.
        let cnt = 0;
        while (cnt < array.length) {
            if (min > array[cnt]) {
                min = array[cnt];
            }
            cnt = cnt + 1;
        }

        // 1-2. 찾으면 새 배열에 넣는다.

        newArray.push(min);

        // 1-3. 원래 배열에 찾은 값은 지운다.

        let cnt2 = 0;
        while (cnt2 < array.length) {
            if (min === array[cnt2]) {
                array[cnt2] = 1000; // -1000 < array 원소 < 1000에 영향 받지 않는 숫자를 넣어줌.
                break;
            }
            cnt2 = cnt2 + 1;
        }

        arrayCnt = arrayCnt + 1;
    }

    console.log("정렬: ", newArray)
}
