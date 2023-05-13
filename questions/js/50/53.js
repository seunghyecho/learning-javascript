window.onload = function(){
    /**
     * 입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력
     */
    function mathBrackets(n){
        console.log("n",n)
        
        // 괄호 갯수 체크
        let count = 0;

        for(let i=0; i<n.length; i++){
            if(n[i] === '('){
                count++;
            }
            if(n[i] === ')'){
                count--;
            }
        }

        if(count !== 0){
            return false;
        }

        let arr = [];
        
        for(let i in n){
            if(n[i] === '('){
                arr.push('(');
            }
            if(n[i] === ')'){
                if(arr.length === 0){
                    return false;
                }
                arr.pop();
            }
        console.log(arr)
        }
        return true;
    }
    const items = prompt('괄호 문자열을 입력해주세요.').split('');
    if(!items) return '';

    if(mathBrackets(items) === true){
        console.log('YES')
    }else{
        console.log('NO')
    }
}