/*
최소 신장 트리란?
- 신장 트리란 그래프 내에 모든 정점을 포함하는 최소 연결 부분 그래프다.
- 여기서 최소 신장 트리(MST)는 다음과 같은 조건을 만족한다.
  - 최소한의 간선으로 모든 정점이 연결되어야 한다.
  - 모든 신장 트리 중 가중치의 값이 최소여야 한다.
  - Cycle이 발생해서는 안된다.
- 최소 신장 트리를 위한 알고리짐은 대표적으로 두 가지가 있다.
  - 크루스칼
  - 프림

크루스칼 알고리즘
- 그리디 개념을 이용하여 구현할 수 있다.
- 먼저 모든 그래프를 부분 집합으로 분리한다.
- 가장 가중치가 낮은 간선을 선택하고 부분 집합을 연결한다.
- 이때 Cycle이 발생하지 않도록 주의한다.
  - 공통 최상위 부모를 찾는 것으로 막을 수 있다.
  - Cycle을 판단하기 위해 Union-Find 알고리즘을 이용할 수 있다.

Union-Find 알고리즘
- 서로소 집합을 구하기 위한 알고리즘
- 서로 다른 두 집합을 병합하는 연산(Union)과 집합의 원소가 어떤 집합에 속해 있는지 판단하는 연산(Find)
- 보통 트리 구조로 구성
- 편의상 재귀로 구현하는 편
*/

function kruskal(n, arr) {
  let totalMinimumCost = 0;
  const sortedArray = [...arr].sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);

  sortedArray.forEach(([a, b, cost]) => {
    if (!compareParent(parent, a, b)) {
      totalMinimumCost += cost;
      unionParent(parent, a, b);
    }
  });

  return totalMinimumCost;
}

// 최상위 부모 찾기
function findParent(parent, x) {
  if (parent[x] === x) return x;

  // 경로 압축 최적화
  return (parent[x] = findParent(parent, parent[x]));
}

function unionParent(parent, a, b) {
  // 각 a, b의 최상위 부모로 갱신
  a = findParent(parent, a);
  b = findParent(parent, b);

  // 더 낮은 원소가 부모 원소가 되도록 규칙 설정
  if (a < b) parent[b] = a;
  else parent[a] = b;
}

// 같은 집합인지 검사
function compareParent(parent, a, b) {
  return findParent(parent, a) === findParent(parent, b);
}

console.log(
  kruskal(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ]),
);
