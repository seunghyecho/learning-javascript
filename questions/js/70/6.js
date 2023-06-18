/*
    수색할 도시의 크기 5x5,
    한 번에 수색 가능한 범위 3x3,
    수색 가능한 범위 3x3 내에서 찾아낼 수 있는 가장 최대의 지뢰의 개수를 구하라.

    입력
    1
    5 3
    1 0 0 1 0
    0 1 0 0 1
    0 0 0 1 0
    0 0 0 0 0
    0 0 1 0 0

    출력
    3
 */
let totalSize = 5;
let unitSize = 3;
let matrix = [
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]
];

let value = 0;
let valueArray = [];
for (let row = 0; row <= totalSize - unitSize; row++) {
    for (let col = 0; col <= totalSize - unitSize; col++) {
        for (let standardRow = row; standardRow <= row + unitSize - 1; standardRow++) {
            for (let standardCol = col; standardCol <= col + unitSize - 1; standardCol++) {
                console.log("standardRow, standardCol", standardRow, standardCol);
                value += matrix[standardRow][standardCol];
                console.log("value", value)
            }
        }
        valueArray.push(value);
        console.log("---------");
        value = 0;
    }

    console.log("!!!!!!!");
}

console.log("valueArray", valueArray);
console.log(Math.max(...valueArray));


/*

방법2

function solution(totalSize, unitSize, matrix) {
    let max = 0;

    for (let row = 0; row < totalSize - unitSize + 1; row++) {
        for (let col = 0; col < totalSize - unitSize + 1; col++) {
            let count = 0;
            for (let standardRow = row; standardRow < row + unitSize; standardRow++) {
                for (let standardCol = col; standardCol < col + unitSize; standardCol++) {

                    if (matrix[standardRow][standardCol] == 1) {
                        count++;
                    }
                }
            }

            if (count > max) {
                max = count;
            }
        }
    }
    return max;
}

*/