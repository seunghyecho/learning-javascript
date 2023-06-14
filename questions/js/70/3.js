
/*
  두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요. 
  이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.
  
    데이터
    graph = {'A': ['B', 'C'],
            'B': ['A', 'D', 'E'],
            'C': ['A', 'F'],
            'D': ['B'],
            'E': ['B', 'F'],
            'F': ['C', 'E']}

    입력
    A F

    출력
    2
 */








/**
 * 그래프와 시작노드, 도착노드를 입력받아 시작노드로부터 도착노드까지의
 *
 * 최단 경로를 구하는 함수
 * @param {Object} graph 리스트 형태로 주어진 노드의 연결 관계
 * @param {String} start 시작 노드
 * @param {String} end 도착 노드
 * @returns {Number} 최단 거리
 */








const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

function solution(graph, start, end) {
    let queue = [start];
    let visited = [start];
    let cnt = 0;

    while (queue.length !== 0) { // 너비 하나를 탐색할 때마다 cnt + 1

        for (let i = 0; i < queue.length; i++) {
            let node = queue.shift();
            console.log('node: ', node); // a -> b -> c -> d -> e -> f

            if (node === end) return cnt;

            /**
             * 방법1 filter()
             */
            const sub = graph[node].filter((el) => !visited.includes(el));
            console.log("sub: ", sub)
            visited.push(...sub);
            console.log('visited: ', visited);
            queue.push(...sub);
            console.log('queue: ', queue);

            /**
             * 방법2 for..in문
             *  for (let next_node in graph[node]) {
                    if (!visited.includes(graph[node][next_node])) {
                        visited.push(graph[node][next_node]);
                        queue.push(graph[node][next_node]);

                    }
                }
             */
        }

        cnt += 1;
    }
    return cnt;
}
console.log('answer:', solution(graph, "A", "F"));