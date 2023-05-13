window.onload = function(){
    /**
     * 
     * 1. 먼저, 배열의 길이가 1과 같거나 작게 될 경우 배열을 바로 리턴한다.

        2. 리스트 가운데 하나의 원소를 고르고 pivot 이라고 한다. : 첫번째 인덱스를 pivot으로 정했다.

        3. 배열 안에서 pivot을 제외한 모든 요소를 탐색해서 pivot보다 작으면 left, 크면 right라는 배열에 넣는다.

                -> let left = []; let right = [];

                -> 이 과정은 인덱스가 arr.length만큼 반복한다

        4. left와 right에 값이 모두 넣어졌으면 각각의 배열에 대해 quickSort를 재귀하도록 해서 다시 정렬한다.

        5. left, pivot, right를 합쳐서 리턴한다.
     */
    function quickSort(arr){
        if (arr.length <= 1){
          return arr;
        }
      
        const pivot = arr[0];
        const left = [];
        const right = [];
      
        for (let i=1; i<arr.length; i++){
          if(arr[i] <= pivot){
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }
        return [ ...quickSort(left), pivot, ...quickSort(right)]
      }
      
      const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
      
      console.log(quickSort(array));
}
// 5 3 8 4 9 1 6 2 7