window.onload = function(){
    /**
     * 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램
     * 
     * 입력1
        1 2 3 4 5

        출력1
        YES


        입력2
        1 4 2 6 3

        출력2
        NO
     */

    function sol(items){
        // 1. 입력한 숫자를 오름차순
        items.sort((a,b)=>{
            return a-b;
        })
        console.log(items); 
        // 1 4 2 6 3 => [1, 2, 3, 4, 6]

        for(let i=0; i<items.length-1; i++){
            // 2. 정렬 시, 첫번째 수 + 1 의 수가 두번째 수와 같지 않으면 'no' 출력
            
            if(items[i]+1 !== items[i+1]){
                console.log("items[i]+1",items[i]+1, "items[i+1]",items[i+1])
                return 'No';
            }
        }
        return 'yes';
    }

    const n = prompt('숫자를 입력해주세요').split(' ').map(n=> parseInt(n,10));
    console.log(sol(n));


}