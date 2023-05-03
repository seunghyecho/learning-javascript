window.onload=function(){
    function bubble(arr) {
      let result = arr.slice(); // 기존의 배열과 for문이 작동된 후의 배열을 구분시켜주기 위하여 초반에 slice메소드로 배열을 복사
        for (let i = 0; i < result.length - 1; i++) {
          for (let j = 0; j < result.length - i; j++) {
            console.log("---result-------",result)
            if (result[j] > result[j + 1]) {
              let swap = result[j];
              console.log("---swap전-----",swap)
              
              result[j] = result[j + 1];
              result[j + 1] = swap;
              console.log("---swap후-----",swap)
            } 
          }
        }
        return result;
      }
      
      
      const items = prompt('입력해주세요.').split(' ').map((n) => {
        return parseInt(n, 10);
      });
      
      console.log(bubble(items));
}

/**
 * 4 2 3 8 5
 *  i라는 변수를 통해 배열의 마지막 지점에서 시작지점까지 순회하는 반복문을 만듭니다
 *  j라는 변수를 통해 시작점부터 i - 1 까지 순회하는 이중 반복문을 만듭니다
 *  배열의 j번째 요소가 j + 1번째 요소보다 크면, 두 개의 위치를 바꿉니다 (Swap)
 *  만약 Inner Loop 에서 Swap이 발생하지 않는다면, 모두 정렬된 것이므로 반복문을 종료합니다
 *  정렬된 요소를 return 합니다
 */