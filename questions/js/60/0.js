window.onload = function () {
    /**
     * 이름을 가나다 순서대로 배정하고 번호를 매기기
     */

    const students = ['강은지', '김유정', '박현서', '최성훈', '홍유진', '박지호', '권윤일', '김채리', '한지호', '김진이', '김민호', '강채연'];

    students.sort();
    for (let i = 0; i < students.length; i++) {
        console.log('번호:', i + 1, '이름:', students[i])
    }


    for (let key in students) {
        console.log(parseInt(key, 10) + 1, students[key])
    }

}