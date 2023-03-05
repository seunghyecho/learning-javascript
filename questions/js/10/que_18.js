window.onload = function () {
  const score = prompt("write your scores!").split(",");

  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    sum += Number(score[i]);

    /*
     *  Answer
     *  sum += parseInt(score[i], 10); 십진수의 형태로 숫자로 데이터 타입 변환
     */
  }

  console.log(Math.floor(sum / score.length));
};
