window.onload = function () {
  // 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴
  const month = prompt("월을 입력하세요.");
  const date = prompt("일을 입력하세요.");

  function getDayName(a, b) {
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // 설정해주기
    const result = new Date(`2020-${a}-${b}`);

    return day[result.getDay()];
  }

  console.log(getDayName(month, date));
};
