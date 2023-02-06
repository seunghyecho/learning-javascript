window.onload = function () {
  const planet = [
    "수성",
    "금성",
    "지구",
    "화성",
    "목성",
    "토성",
    "천왕성",
    "해왕성",
  ];

  const n = prompt("숫자를 입력하세요.");
  document.write(planet[n - 1]);
};
