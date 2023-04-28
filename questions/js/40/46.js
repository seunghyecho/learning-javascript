window.onload = function () {
    let userNum = prompt("숫자를 입력해주세요.");
    let sum = 0;
    if(userNum !== 0) return false;
    userNum.split("").forEach(num => {sum += Number(num)});    
    
    console.log(`입력한 숫자의 각 자리수 합은 ${sum}입니다.`);


    /*
    let arr = [];
    let sum = 0;

    for (let i=0; i<20; i++){
    arr[i] = i+1;
    }

    arr.forEach((n) => {
    while(n !== 0){
        sum += (n % 10);
        n = Math.floor(n/10);
    }
    })

    console.log(sum);
    */
  };

  // 101112131415
  // : 21

  // 1234567891011121314151617181920
  // : 102