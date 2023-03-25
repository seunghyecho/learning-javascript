window.onload = function () {
    const unsorted = prompt('키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램');
    console.log("unsorted",unsorted);

    let sorted = '';
    sorted = unsorted.split(' ').sort(function (a, b) {
        console.log(a-b)
        return a - b;
    });
    console.log("sorted",sorted);

    //비교
    if (unsorted === sorted) {
        console.log('YES')
    } else {

        console.log('NO')
    }
}

//176 156 155 165 166 169
//155 156 165 166 169 176