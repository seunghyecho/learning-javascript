window.onload = function () {
  const n = window.prompt("");
  if (n % 3 === 0) {
    document.write("짝");
  } else {
    document.write(n);
  }
};
