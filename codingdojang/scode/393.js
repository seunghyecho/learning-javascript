/*
1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

1. 숫자를 늘어뜨린다.
2. 숫자를 문자로 변환하고 분리. split
3. 필터로 찾으려는 숫자를 구분
*/

Array(10000).fill(0).map((m, i) => m + i).toString().split('').filter(f => f === '8')
