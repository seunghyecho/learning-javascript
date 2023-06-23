/*
기계를 구입하려 하는데 이 기계는 추가 부품을 장착할 수 있다. 
추가 부품은 종류당 하나씩만 장착 가능하고, 모든 추가 부품은 동일한 가격을 가진다.

원래 기계의 가격과 성능, 추가 부품의 가격과 각 부품의 성능이 주어졌을 때, 
추가 부품을 장착하여 얻을 수 있는 최대 가성비를 정수 부분까지 구하시오.
(가격 및 성능은 상대적인 값으로 수치화되어 주어진다).

e.g.)
원래 기계의 가격 : 10   // price
원래 기계의 성능 : 150  // performance
추가 부품의 가격 : 3    // elePrice
추가 부품의 성능 : 각각 30, 70, 15, 40, 65 // elePerformance

추가 부품을 장착하여 얻을 수 있는 최대 가성비 : 17.81... → 17
(성능이 70과 65인 부품을 장착하면 됨)
*/


const elePrice = 3;
const elePerformance = [30, 70, 15, 40, 65];
let price = 10;
let performance = 150;

// 최대 가성비로 장착할거니까 내림차순 [70, 65, 40, 30, 15]
elePerformance.sort((a, b) => b - a);

for (let i of elePerformance) {

    if (((performance + i) / (price + elePrice)) < (performance / price)) {
        // 원래 가격 대비 성능인 150 / 10 = 15보다 작으면
        break;
    } else {
        // 원래 가격 대비 성능인 150 / 10 = 15보다 크면
        performance += i;
        price += elePrice;
    }

}
// 비트 연산자(bitwise operator)
console.log(~~(performance / price))