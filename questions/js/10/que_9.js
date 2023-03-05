// 데이터
var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

var result = year.concat(
  "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second
);

console.log(result);

// 출력
// 2019/04/26 11:34:27
// concat() 메서드는 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 반환합니다.
// year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

// new Date().toLocaleString()
// '2023. 1. 29. 오후 4:03:17'

// new Date().toString()
// 'Sun Jan 29 2023 16:03:31 GMT+0900 (한국 표준시)'

// new Date().toGMTString()
// 'Sun, 29 Jan 2023 07:03:45 GMT'

// new Date().toISOString()
// '2023-01-29T07:04:08.777Z'

// new Date().toUTCString()
// 'Sun, 29 Jan 2023 07:04:20 GMT'

// new Date().toDateString()
// 'Sun Jan 29 2023'

// new Date().toTimeString()
// '16:04:40 GMT+0900 (한국 표준시)'

// new Date().toLocaleDateString()
// '2023. 1. 29.'

// new Date().toLocaleTimeString()
// '오후 4:05:12'
