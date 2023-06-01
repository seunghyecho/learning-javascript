/**
 * a = [1, 2, 3, 4]
 * b = [a, b, c, d]
 * 
 * [[1, a], [b, 2], [3, c], [d, 4]]
 */

const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

/**
 * map 사용
 */
let c = a.map((e, i) => {
    if (i % 2 === 0) {
        return [e, b[i]]
    } else {
        return [b[i], e]
    }
});
console.log("c", c)

/**
 * forEach 사용
 */
let d = [];
a.forEach(function (e, i) {
    if (i % 2 === 0) {
        d.push([e, b[i]]);
    } else {
        d.push([b[i], e]);
    }
});
console.log("d", d)


