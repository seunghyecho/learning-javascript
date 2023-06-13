/**
 * 너비 우선 탐색이란 어떤 노드를 방문하여 확인한 후, 
 * 목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 
 * 우선순위가 동일한 다른 노드를 찾고 그 순위에 없으면 
 * 그다음 순위 노드를 차례대로 찾는 방법
 * 
 * 너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.
 * 
 * bfs는 queue과 방문 여부 확인해서 해결
 * queue -> FIFO (들어온 순서대로 나감)
    
 *  데이터
    graph = {'E': ['D', 'A'],
            'F': ['D'],
            'A': ['E', 'C', 'B'],
            'B': ['A'],
            'C': ['A'],
            'D': ['E','F']}

    출력
    E D A F C B
 */

const graph = {
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E', 'F'],
    'E': ['D', 'A'],
    'F': ['D'],
};

function bfs(graph, start) {
    let visited = []; //빈 스택 배열
    let queue = []; //방문 여부를 확인할 빈 배열

    queue.push(start); //먼저 시작할 위치를 담아놓고 시작

    while (queue.length !== 0) { //queue애서 모두 shift될 때까지
        let n = queue.shift(); //shift : 배열의 앞에서부터 뽑기
        if (!visited.includes(n)) { // 방문 여부 확인
            visited.push(n);
            let sub = graph[n].filter(x => !visited.includes(x)); //처음 n에 연결된 노드 중 방문하지 않은 노드
            for (let i of sub) {
                queue.push(i); //queue에 push
            }
        }
    }
    return visited;
}

console.log("answer: ", bfs(graph, 'E'));
// E D A F C B
