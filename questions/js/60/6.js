/**
 * 주어진 규칙 하에 rule이 존재할 수 있는지 여부를 반환하는 함수
 * 
 * 1. 규칙의 길이만큼 루프를 돌린다.
 * 2. 배열값에서 규칙의 [0]을 찾는다. 있다? 없다?
 * 3. rule[0]이 있으면, 넣기 전에 temp값과 index 값 비교
 * 4. rule[0]이 없으면, 배열값에서 규칙의 [1]을 찾는다, 있다? 없다?
 * 
 * indexOf 메서드
 * 주어진 값과 일치하는 첫 번째 인덱스를 반환.
 * 일치하는 값이 없으면 -1을 반환.
 */

function checkRule(rule, block) {
    let temp = rule.indexOf(rule[0]); //0
    for (let i of rule) { //a,b,c,d

        if (block.includes(i)) {

            if (temp > block.indexOf(i)) {
                console.log('불가능========', i, temp, block.indexOf(i))
                return '불가능'
            }
            console.log('가능=========', i, temp, block.indexOf(i))
            temp = block.indexOf(i);
        }
    }
    return '가능'
}
/**
 * checkRule 함수는 임시저장 값을 temp 변수에 할당하고,
 * rule의 각 문자들이 block 배열의 원소에 포함된다면, 처음에 저장한 임시저장 값들을 비교해서
 * 만약 임시 저장 값이 크면 불가능 리턴하고, 
 * 아니면 계속 임시저장 값에 index 번쨰의 숫자를 저장.
 */

function solution(rule, block) {
    let answer = [];
    for (let i of block) {
        console.log('i,rule:', i, rule);
        answer.push(checkRule(rule, i));
    }
    return answer;
}

const block = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "AEBFDGCH"];
const rule = "ABCD";

console.log(solution(rule, block));
  // ["가능", "불가능", "가능", "가능", "불가능"]