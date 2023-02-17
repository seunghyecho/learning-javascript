window.onload = function () {
  const calc = prompt("").split(" ");

  const a = Number(calc[0]);
  const b = Number(calc[1]);
  console.log("result: ", a / b, "left: ", a % b);
};
