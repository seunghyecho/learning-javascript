// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
const nums = [100, 200, 300, 400, 500];
nums.slice(0, -2); //[100, 200, 300]

//answer
nums.pop(); //500
nums.pop(); //400
console.log(nums); //[100, 200, 300]
