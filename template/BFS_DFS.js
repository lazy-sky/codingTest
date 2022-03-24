/*
그래프 탐색 알고리즘

BFS의 특징
- 큐를 이용하여 구현할 수 있다.
- 시작 지점에서 가까운 정점부터 탐색한다.
- O(V + E), V는 정점의 수, E는 간선의 수

DFS의 특징
- 스택을 이용하여 구현할 수 있다.
- 시작 지점에서 깊은 것부터 탐색한다.
- O(V + E), V는 정점의 수, E는 간선의 수
*/

function dfs(graph, v, visited) {
  visited[v] = true;
  console.log(v);

  for (vertex of graph[v]) {
    if (!visited[vertex]) {
      dfs(graph, vertex, visited);
    }
  }
}

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function bfs(graph, start, visited) {
  queue = new Queue();
  queue.enqueue(start);
  visited[start] = true;
  // 큐가 빌 때까지 반복
  while (queue.size() > 0) {
    v = queue.dequeue();
    console.log(v);
    for (vertex of graph[v]) {
      if (!visited[vertex]) {
        queue.enqueue(vertex);
        visited[vertex] = true;
      }
    }
  }
}

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

console.log('DFS');
dfs(graph, 1, Array(9).fill(false));

console.log('BFS');
bfs(graph, 1, Array(9).fill(false));

// 가장 먼 노드
// https://programmers.co.kr/learn/courses/30/lessons/49189
function solution(n, edge) {
  // 인접 리스트
  const graph = Array.from(Array(n + 1), () => []);
  edge.forEach(([v1, v2]) => {
    graph[v1].push(v2);
    graph[v2].push(v1);
  });

  const distanceFromOne = Array(n + 1).fill(undefined);
  distanceFromOne[1] = 0;

  // BFS
  const queue = [1];
  while (queue.length > 0) {
    const from = queue.shift();
    graph[from].forEach((to) => {
      if (distanceFromOne[to] === undefined) {
        queue.push(to);
        distanceFromOne[to] = distanceFromOne[from] + 1;
      }
    });
  }

  const farthest = Math.max(...distanceFromOne.filter((x) => x));
  return distanceFromOne.filter((x) => x === farthest).length;
}
