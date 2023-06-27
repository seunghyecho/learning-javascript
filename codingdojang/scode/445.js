/*
비슷한 단어 찾아내기

아래와 같은 결과를 출력하는 function을 구현하라

bool OneEditApart(string s1, string s2)

OneEditApart("cat", "dog") = false
OneEditApart("cat", "cats") = true 
OneEditApart("cat", "cut") = true 
OneEditApart("cat", "cast") = true 
OneEditApart("cat", "at") = true
OneEditApart("cat", "acts") = false 
한개의 문자를 삽입, 제거, 변환을 했을때 
s1, s2가 동일한지를 판별하는 OneEditApart 함수를 작성하시오.
*/

function OneEditApart(a, b) {
    while (a.length != 0 && b.length != 0) {
        /**
         * cat
         * 'cat'.slice(-1) : 't'
         * 'cat'.slice(0,-1) : 'ca'
         * 'cat'.slice(1) : 'at'
         */


        if (a.slice(-1) == b.slice(-1)) {
            // 같으면 마지막번째꺼만 제거하고 변수에 넣어줌
            a = a.slice(0, -1);
            b = b.slice(0, -1);

        } else if (a[0] == b[0]) {
            // 같으면 0번째꺼만 제거하고 변수에 넣어줌
            a = a.slice(1);
            b = b.slice(1);

        } else {
            // 맨 뒤도 다르고 앞도 다르다.
            break;
        }

    }
    // 남은 문자의 길이가 1보다 작거나 같으면 boolean 리턴
    return a.length <= 1 && b.length <= 1;
}

console.log(OneEditApart("cat", "dog"))
console.log(OneEditApart("cat", "cats"))
console.log(OneEditApart("cat", "cut"))
console.log(OneEditApart("cat", "cast"))
console.log(OneEditApart("cat", "at"))
console.log(OneEditApart("cat", "acts"))

