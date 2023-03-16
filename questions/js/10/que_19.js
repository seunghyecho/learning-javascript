window.onload = function () {
  const score = prompt("두 숫자").split(",");

  /*
   * answer
   * console.log(Math.pow(parseInt(score[0], 10), parseInt(score[1], 10)));
   */

  for (let i = 0; i < score.length; i++) {
    const a = parseInt(score[i], 10);
    return console.log(a ** score[i]);
  }
};
