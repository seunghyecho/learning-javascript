window.onload = function () {
  // 제한 무게가 주어지고 총 n명 탈 수 있는지 알 수 있는 프로그램
  const limit = prompt("제한 무게");
  const n = prompt("친구들 인원수");
  let total = 0;
  let count = 0;

  // n 만큼 반복
  for (let i = 1; i <= n; i++) {
    total += parseInt(prompt("무게를 입력해주세요"), 10);
    if (total <= limit) {
      count = i;
    }
  }
  console.log("count", count);
};

/**
 * 50 5 20 20 20 20 20
 */
