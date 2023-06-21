/*

순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
리스트의_차 = [25, 19, 15, 7, 9, 8, 5]

순회전 39와 순회후 34 값의 차가 5이므로 리스트의 차 중 최소값입니다. 
따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.


입력
순회횟수는 : 2

출력
index : 6
value : 39, 34

*/

function rotate(arr, rotate) {
    // 1.
    let deepArr = arr.slice();
    // 2.
    let temp = [];

    // 3.
    for (let i = 0; i < rotate; i++) {
        deepArr.unshift(deepArr.pop());
    }

    // 4.
    for (let i in arr) {
        temp.push(Math.abs(arr[i] - deepArr[i]));
    }

    // 5.
    const m = Math.min.apply(null, temp);

    // 6.
    let index = temp.indexOf(m);
    console.log("index :", index);
    console.log("value :", arr[index], deepArr[index]);

};

rotate([10, 20, 25, 27, 34, 35, 39], 2);

/*
1. 순회전_리스트를 깊은 복사
2. 순회 전후 리스트의_차를 담는 배열 생성
3. 한 숫자씩 맨 뒤의 숫자를 맨 앞으로
4. 리스트의_차를 담는 배열에 절대값을 담는다. arr 또는 deepArr 로 상관없음
5. 리스트의_차 내 최소값
6. 최소값의 인덱스 구하기
*/