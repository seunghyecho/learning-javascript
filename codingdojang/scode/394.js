/*
두 날짜(YYYYMMDD)의 차이 일수를 구하는 프로그램을 작성하시오.

※ 단, 프로그래밍 언어에서 지원하는 날짜차이를 계산하는 라이브러리는 사용하지 말것

예)

20070515 sub 20070501 = 14
20070501 sub 20070515 = 14
20070301 sub 20070515 = 75

난이도 조절을 위해 윤년이나 평년은 고려하지 않습니다.
각 개월의 일 수는 아래와 같습니다.
[31,28,31,30,31,30,31,31,30,31,30,31]

*/


function subDate(date) {
    const 년 = parseInt(date.slice(0, 4));
    const 월 = parseInt(date.slice(4, 6));
    const 일 = parseInt(date.slice(6));
    // 0월, 1월, ... ,12월
    const 월별일 = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let 일수 = 년 * 365 + 일;

    // i < 월 : 전월 일수 + 일수
    for (let i = 1; i < 월; i++) {
        일수 += 월별일[i]
    }
    return 일수
}

function solution(a, b) {
    return Math.abs(subDate(a) - subDate(b))
}

console.log(solution('20070515', '20070501'));