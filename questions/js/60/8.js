/**
 * 버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램
 */

//  입력
const schedule = ["12:30", "13:20", "14:13"];
const current = "12:40";

function solution(schedule, current) {
    let answer = [];
    current = current.split(':').map(n => parseInt(n, 10)); // [12, 40]
    current = (current[0] * 60) + current[1]; //760

    for (let i in schedule) {
        let time = schedule[i].split(':').map(n => parseInt(n, 10));
        time = (time[0] * 60) + time[1];

        if (time < current) {
            answer.push('지나갔습니다');

        } else {
            let hour = parseInt((time - current) / 60, 10);
            let min = (time - current) % 60;
            answer.push(String(hour).padStart(2, 0) + '시간 ' + String(min).padStart(2, 0) + '분');
        }
    }
    return answer;
}


console.log(solution(schedule, current));


//  출력
//['지나갔습니다', '00시간 40분', '01시간 33분']
