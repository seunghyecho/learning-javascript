window.onload = function(){
    const str = window.prompt('Write string'); // pineapple is yummy
    const findStr = window.prompt('Find string'); // apple

    console.log(str.indexOf(findStr));

    /**
     * indexOf() 메서드는 호출한 스트링 객체나 배열에서
     * 주어진 값과 일치하는 값 혹은 요소의 첫 번재 인덱스를 반환하고 존재하지 않으면
     * -1을 반환한다.
     */
}