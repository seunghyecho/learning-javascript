window.onload = function () {
  const number = prompt("숫자를 입력받고 이를 2진수로 바꾸는 프로그램");
  const dec = parseInt(number, 10);
  console.log(dec.toString(2));

  /*
  let a = prompt("10진수를 입력해주세요.");
  let b = [];
  let result = "";

  while (a) {
    b.push(a % 2);
    a = parseInt(a / 2, 10);
  }
  b.reverse();

  b.forEach((n) => {
    result += n;
  });

  console.log(result);
  */
};
