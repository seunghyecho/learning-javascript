/**
 * 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 
 * 곱할 수 있다면 그 결과를 출력하고, 
 * 곱할 수 없다면 -1을 출력하는 프로그램
 * 
 * 입력
    a = [[1, 2],
        [2, 4]]

    b = [[1, 0],
        [0, 3]]

    출력
    [[1, 6], [2, 12]]

    (1 x 1) + (2 x 0) +
    (1 x 0) + (2 x 3) +
    (2 x 1) + (4 x 0) +
    (2 x 0) + (4 x 3) =

    (a[0][0] x b[0][0]) + (a[0][1] x b[1][0]) + 
    (a[0][0] x b[0][1]) + (a[0][1] x b[1][1]) +
    (a[1][0] x b[0][0]) + (a[1][1] x b[1][0]) +
    (a[1][0] x b[0][1]) + (a[1][1] x b[1][1]) = 

    
 */

const a = [[1, 2], [2, 4]];
const b = [[1, 0], [0, 3]];


function solution(a, b) {
    let result = [];

    if (a[0].length === b.length) {
        console.log("곱할 수 있다");

        for (let i = 0; i < a.length; i++) { // 첫번째 행렬의 행의 개수를 기준으로
            let row = [];

            for (let j = 0; j < b[0].length; j++) { // 두번째 행렬의 열의 개수를 기준으로
                let sum = 0;

                for (let k = 0; k < b.length; k++) { // 두번째 행렬의 행의 개수를 기준으로
                    console.log(i, k, k, j)

                    sum += a[i][k] * b[k][j]; // sum: 1, 6, 2, 12
                }
                row.push(sum);
            }
            result.push(row);
        }
        return result;

    } else {
        console.log("곱할 수 없다");
        return -1;
    }
}


console.log(solution(a, b));