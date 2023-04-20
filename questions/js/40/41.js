window.onload = function () {
  const number = prompt("숫자가 주어지면 소수인지 아닌지 판별하는 프로그램");
  //(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log("소수가 아니다, NO");
      return false;
    }
  }

  console.log("소수다, YES");
};

/*
const num = prompt("숫자를 입력하세요.");
function check_prime(num) {
  for (let i=2; i<num; i++) {
    const result = num % i;
    if (result === 0) {
      console.log('NO');
      return false;
    }
  }
  if (num === 1) {
    console.log('NO');
    return;
  }
  console.log('YES');
}

check_prime(num);
*/
