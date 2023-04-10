window.onload = function () {
    const array = prompt('학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램').split(' ');
    // 원범 원범 혜원 혜원 혜원 혜원 유진 유진
    let result = {};
    let winner = '';

    for (let i in array) {
        let val = array[i];
        result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
    }
    winner = Object.keys(result).reduce(function (a, b) {
        return result[a] > result[b] ? a : b
    })
    console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
}
/**
 * array
 * 0:"원범"
 * 1:"원범"
 * 2:"혜원"
 * 3:"혜원"
 * 4:"혜원"
 * 5:"혜원"
 * 6:"유진"
 * 7:"유진"
 */

/**
 * result
 * 원범:2
 * 유진:2
 * 혜원:4
 */

/**
 * winner
 * 혜원
 */

/**
 *
 * Practice
 * var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
 * { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
 */

/**
 * Object.keys() 메서드
 * Object라는 내장 객체의 메서드
 * 객체(typeof 연산자로 확인했을 때 object가 반환되는)의 프로퍼티들 중에서 key값
 * 즉, 다른 말로 프로퍼티 네임들만 묶어서 배열로 반환하는 메서드
 */
