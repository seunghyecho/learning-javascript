window.onload = function(){
    const num = prompt('숫자를 입력해주세요.').split(' ').map((n)=>{
        if(!n){
            return null
        } else{
            return parseInt(n,10) //문자로 된 배열을 숫자로 변환    
        }
    });
/**
 * 방법1
 */
    console.log(Math.max(...num));
/**
 * 방법2
 */
    num.sort((a,b)=>{
        return b-a;
    })
    
    console.log(num[0]);
}
// 10 9 8 7 6 5 4 3 2 1