/*
쉔은 회전 초밥집에 갔습니다.
초밥집에 간 쉔은 각 초밥에 점수를 매기고 낮은 점수의 순서로 초밥을 먹으려 합니다.
이때 n위치에 놓여진 초밥을 먹고자 할 때 접시가 몇 번 지나가고 먹을 수 있을지 출력하세요.

1. 초밥은 놓여진 위치에서 옮겨지지 않습니다.
2. 지나간 초밥은 나머지 초밥이 지나간 후에 다시 돌아옵니다.
3. 초밥은 1개 이상 존재합니다.

예)
A, B, C, D, E 초밥이 있고 각 점수가 1, 1, 3, 2, 5 일 때 3번째(C초밥)을 먹게 되는 순서는
점수가 1인 초밥 A와 B를 먹고 다음으로 점수가 2인 D 초밥을 먹어야 됩니다.
A B C D E 의 순서로 접시가 도착하지만 C가 도착했을때 먹지 못하는 상황이 옵니다.
2점을 주었던 D를 먼저 먹어야 C를 먹을 수 있습니다. 
즉, A B C D E C 의 순서로, 접시가 5번 지나가고 먹게 된다.



입력
point = [1,1,3,2,5] //각 접시별 점수가 들어있는 배열
dish = 3 //먹고자하는 접시의 위치

출력
5

입력
point = [5,2,3,1,2,5]
dish = 1

출력
10

*/

function solution(point, dish) {
    /**
     * 먹고자하는 접시의 위치 3의 index = 2
     */

    // 배열 순서는 0부터 시작, 입력은 1부터 시작이기 때문에 -1 해준다.
    dish -= 1;
    let answer = 0;
    //오름차순으로 정렬
    let s = point.slice();
    s.sort((a, b) => {
        return a - b;
    });
    console.log('s', s);

    while (true) {
        // point 제일 앞의 점수를 추출하여  p에 넣는다. 즉, 앞에 도착한 접시의 점수!
        // shift와 push를 활용해 회전하도록 구현할 예정 !
        let p = point.shift();

        // 현재 s[0]은 point 배열에서 가장 작은 값을 가지고 있음!
        // 현재 가장 낮은 점수를 가지고 있는 접시가 앞에 도착했다면 먹도록 할것!
        if (s[0] === p) {
            //앞에 도착한 접시가 선택한 접시라면 먹고 반복문 종료
            if (dish === 0) {
                break;
            }
            // 선택한 접시 움직임.
            dish -= 1;
            //한 접시를 먹었음으로 하나 줄어듬
            s.shift();
        } else {
            // 접시 위 초밥을 먹을 수 있는 조건이 충족되지 않아 그대로 둔다
            // shift 했던 것을 다시 push.
            point.push(p);

            /**
             * 접시의 위치 dish
             * 먹고자하는 접시의 위치 3의 index = 2
             */

            if (dish === 0) {
                dish = point.length - 1; //접시의 움직임 만약 선택한 접시가 앞에 도착했다면 맨 뒤로 보내고,
            } else {
                dish = dish - 1; // 그렇지 않다면 한 칸 당긴다.
            }
            // 반복 한번당 접시 한번 지나감을 나타냄.
        }
        answer += 1;
    }
    return answer;
}

const point = [1, 1, 3, 2, 5];
const dish = 3;

console.log(solution(point, dish));

/*

answer = 0
dish = 2 //먹고자하는 접시의 위치 3의 index
point=[1, 1, 3, 2, 5];
s=[1, 1, 2, 3, 5];
while(true){
    p = 1 (point에서 1을 뺀 )
    if(s[0] = p) true로
    dish = 1
    s에서 1을 뺀다 s = [1, 2, 3, 5];
}


answer = 1
dish = 1 //먹고자하는 접시의 위치 3의 index
point=[ 1, 3, 2, 5];
s=[1, 2, 3, 5];
while(true){
    p = 1 (point에서 1을 뺀 )
    if(s[0] = p) true로
    dish = 0
    s에서 1을 뺀다 s = [ 2, 3, 5];
}


answer = 2
dish = 0 //먹고자하는 접시의 위치 3의 index
point=[ 3, 2, 5];
s=[2, 3, 5];
while(true){
    p = 3 ( point에서 3을 빼)
    if(s[0] = p) false로

    point=[2,5,3];
    if(dish = 0) true로 dish = 2 (point길이 - 1)
}

answer = 3
dish = 2 //먹고자하는 접시의 위치 3의 index
point=[2,5,3];
s=[2, 3, 5];
while(true){
    p =  2 (point에서 2을 빼)
    if(s[0] = p) true로
    dish = 2-1 = 1
    s에서 2을 뺀다 s = [ 3, 5];
}

answer = 4
dish = 1 //먹고자하는 접시의 위치 3의 index
point=[5, 3];
s=[3, 5];
while(true){
    p =  5 (point에서 5을 빼)
    if(s[0] = p) false로

    point=[3, 5];
    dish = 1-1 = 0
}


answer = 5
dish = 0 //먹고자하는 접시의 위치 3의 index
point=[3,5];
s=[3, 5];
while(true){
    p =  3 (point에서 3을 빼)
    if(s[0] = p) true로
        if(dish = 0) true로 반복문 나가고.
}

따라서, answer =5 를 return함

 */