window.onload = function () {
  const n = window.prompt("반지름의 길이를 입력하세요.");

  function circle(n) {
    return n * n * 3.14;
  }
  console.log(circle(n));
};
