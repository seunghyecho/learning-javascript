/*
20150111을 출력합니다.
4가지 기준만 만족하면 됩니다.

코드 내에 숫자가 없어야 합니다.
파일 이름이나 경로를 사용해서는 안됩니다.
시간, 날짜 함수를 사용해서는 안됩니다.
에러 번호 출력을 이용해서는 안됩니다.

*/


/*
방법1
1. 33진법 이용해서 number.toString(33) -> 'gwnae'
2. 숫자로 출력하려면 parseInt('gwnae',33)
3. 33진법의 숫자를 유니코드 이용해서  바꾸려면 '!'.charCodeAt() -> 33 
*/
console.log(parseInt('gwnae', '!'.charCodeAt()))


