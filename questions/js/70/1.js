/**
 * 그래프 탐색 알고리즘
 * 드라마를 하나를 몰아본다, 재귀함수 이용, 스택 구조
 * 
 * 깊이 우선 탐색이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 
 * 목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법
 * 
 * DFS는 이전 노드가 아니라 자기 자신과 연결되었던 노드들 먼저 탐색하기 때문에 stack을 사용
 * 
 * dfs는 stack과 방문 여부 확인해서 해결
 * stack -> LIFO (시간 순서에 따라 자료가 쌓여서 가장 마지막에 삽입된 자료가 가장 먼저 삭제됨)
 * 
 *  데이터
    graph = {'E': ['D', 'A'],
            'F': ['D'],
            'A': ['E', 'C', 'B'],
            'B': ['A'],
            'C': ['A'],
            'D': ['E','F']}


    출력
    E D F A C B
    e a b c d f
 */


const graph = {
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E', 'F'],
    'E': ['D', 'A'],
    'F': ['D'],
};


function dfs(graph, start) {
    let visited = []; //빈 스택 배열
    let stack = []; //방문 여부를 확인할 빈 배열

    stack.push(start);

    while (stack.length !== 0) { //stack에서 모두 pop될 때까지
        let n = stack.pop(); //pop : 배열의 뒤에서부터 뽑기 
        // console.log('n', n);
        if (!visited.includes(n)) { // 방문 여부 확인
            visited.push(n);

            let sub = graph[n].filter(x => !visited.includes(x)); // 처음 n에 연결된 노드 중 방문하지 않은 노드
            // console.log("sub", sub)
            for (let i of sub) {
                stack.push(i);
            }
            // console.log("stack", stack)

        }
    }
    return visited;
}


console.log("answer: ", dfs(graph, 'E'));
// E A B C D F


