window.onload = function () {
  const num = prompt(
    "사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램"
  );
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i]);
  }

  /*
  이건 뭘까
  while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  */

  console.log("sum", sum);
};

/**
 * 입력 : 18234
    출력 : 18
 */
