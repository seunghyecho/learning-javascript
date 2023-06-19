/**
 * 369 게임을 하는데 조금 이상한 규칙이 있습니다. 
 * 
 * 3이나 6, 9 일 때만 박수를 쳐야합니다. 
 * 예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
 * 수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 
 * 36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.
 * 
 * n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.
 * 
 * 입력
   '93'

   출력
   10


   3 1박수
   6 2박수
   9 3박수

   33 4박수
   36 5박수
   .
   .
   .
   93 10박수
   96 11박수
   99 12박수
   333 13박수
   336 14박수
   .
   .
   .
   996 38박수
   999 39박수
 */

function sol(n) {
    let answer = 0;

    let count = 1;
    const d = { 3: 1, 6: 2, 9: 3 };
    const arr = String(n).split('');

    while (arr.length !== 0) {
        answer += d[parseInt(arr.pop(), 10)] * count; // 일의자리수 먼저 1*1, 십의자리수 3*3
        count *= 3;
    }
    return answer;
}
/**
 * whie문..ㅇㅅㅇ
 * 
 * 3    3
 * 1*3  1*1
 * 
 * 3    6
 * 1*3  2*1
 * 
 * 3    9
 * 1*3  3*1
 * 
 * 6    3
 * 2*3  1*1
 * 
 * 6    6
 * 2*3  2*1
 * 
 * 6    9
 * 2*3  3*1
 * 
 * 9    3
 * 3*3  1*1
 */

console.log(sol(93));

/**
 * 방법2?
    1. 1~n까지 loop
    2. 해당 숫자를 문자열로 분리 loop
    3. 해당 글자가 0이거나 3의 배수가 아니면 return 0
    4. 해당 글자가 3의 배수면 return 1
    5. 2~4을 카운트
 */