window.onload = function () {
  const score = prompt(
    "학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하는 프로그램"
  )
    .split(" ")
    .map((n) => parseInt(n, 10));

  // 오름차순 정렬, 맨 뒤에서부터 1순위,2순위,3순위
  score.sort((a, b) => {
    return a - b;
  });

  let count = 0;
  let arr = [];

  // 1~3위, 중복 포함
  while (arr.length < 3) {
    // 맨 뒤 순위부터 추출하여 제거
    let n = score.pop();
    console.log("n", n, "score", score);

    if (!arr.includes(n)) {
      // 순위에 포함되어 있지 않으면 새 배열에 추가
      arr.push(n);
    }
    // 순위에 포함되어 있으면 사탕을 받을 학생의 수(count)를 증가
    count += 1;
  }

  console.log(arr);
  console.log(count);
};
// 97 86 75 66 55 97 85 97 97 95
