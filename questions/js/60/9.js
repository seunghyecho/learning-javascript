/**
 * 2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를 작성하세요
 * 예)
    100 == 47 + 53
    56 == 19 + 37
 */


/**
 * 소수(prime number) 구하기
 */

let prime = [];
let isPrime = true;

for (let i = 2; i < 10; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        prime.push(i);
    }
    isPrime = true;
}
// prime : [2, 3, 5, 7]



/**
 * 2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션 구하기
 */

let n = 10;
let partitian = [];

for (let p of prime) {
    console.log(p, n - p)
    if (prime.includes(n - p) && p <= (n - p)) {
        partitian.push([p, n - p]);
    }
}
// partitian : [ [3, 7], [5, 5] ]



/**
 * 골드바흐 파티션 차가 작은 것을 출력하거나 그 차가 큰 것
 */
let subtraction = partitian.map(e => e[1] - e[0]);
// 파티션 차 : [4,0]
let min = partitian[subtraction.indexOf(Math.min.apply(null, subtraction))];
// 파티션 차가 작은 것 : partitian[subtraction.indexOf(0)] -> partitian[1] 

let max = partitian[subtraction.indexOf(Math.max.apply(null, subtraction))];
console.log(subtraction, min, max)





/**
 * +)에라토스테네스의 체
 * 
 * function prime_list(n){
    //에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
    let sieve = []
    for(let i = 2; i < n; i++){
      sieve.push(true);
    }

    //n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
    let m = parseInt(n ** 0.5, 10);
    for(let i = 2; i < m + 1; i++){
        if (sieve[i] == true){      // i가 소수인 경우 
          for(let j = i+i; j < n; j+=i){ // i이후 i의 배수들을 False 판정
                sieve[j] = false;
            } 
        }
    }

    // 소수 목록 산출
    let prime = [];
    for(let i = 2; i < n; i++){
      if (sieve[i] == true){
        prime.push(i);
      }
    }

    return prime;
}
 */