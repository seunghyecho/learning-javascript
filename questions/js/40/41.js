window.onload = function () {
  const number = prompt("숫자가 주어지면 소수인지 아닌지 판별하는 프로그램");
  // 소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수
  // 다른 말로 하면, 1과 자기 자신이 아닐때 나누어 떨어지면 소수가 아니다.

  for (let i = 2; i < number; i++) {
    console.log(number, i);
    if (number % i === 0) {
      console.log("소수가 아니다.");
      return false;
    }
  }

  console.log("소수다.");
};
