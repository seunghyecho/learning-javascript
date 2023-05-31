/**
 * 어떤 입력이 주어지면 앞 글자만 줄여 출력
 * 복잡한 세상 편하게 살자
 */

const string = prompt('복잡한 세상 편하게 살자').split(' ');
let result = '';
for (let i = 0; i < string.length; i++) {
    result += string[i].substring(0, 1)
}

/**
 * for of문
 * for (let s of string) {
    result += s.slice(0, 1);
   }
 */

console.log(result)