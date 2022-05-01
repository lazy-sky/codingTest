# 엣지 케이스 찾기

보통 엣지 케이스는 생각하기 힘들거나 상식적이지 않은 입력으로 들어오는 경우가 많다.

시간복잡도 계산을 끝내고 그 안에 풀 수 있도록 로직을 작성했다면 그 다음으로는 엣지 케이스를 대비해야 한다.

엣지 케이스는 보통 다음과 같다.

- 입력 값의 크기가 굉장히 작은 경우 (대부분의 입력 값이 최대값 언저리인 경우)
- 입력 값의 크기가 굉장히 큰 경우 (대부분의 입력 값이 최소값 언저리인 경우)
- 입력 값의 범위가 넓은 경우 (A는 최소값이고 B가 최대값인 경우)
- 음수 입력이 허용된 경우 음수만 입력 받는 경우
- 리스트를 입력 받을 때 값이 없거나 하나만 있는 경우

입력 값 이외에도 다음과 같은 엣지 케이스가 있을 수 있다.

- 그래프에서 사이클이 발생하는 경우
- 길찾기 문제에서 지그재그로 움직이는 경우
- 부동소수점 오차

# 문제 유형 파악 팁

## 문제를 읽기 전에 무조건 입출력 제한을 보자!

문제를 자세히 읽기 전에 입출력 제한을 보는 것이 중요하다. 특히 입력 제한을 보면 어떤 시간 복잡도 내에 풀어야 하는지 알 수 있다.

예를 들어 입력이 100 이하인 경우 높은 확률로 완전 탐색 문제다. O(n^3)까지도 가능하기 때문에 플로이드 워셜과 같이 시간복잡도가 높은 알고리즘도 사용할 수 있다. 

- 입력이 100 이하
  - 완전 탐색
  - 백트래킹
- 입력이 10,000 이하
  - 최대 O(n^2)
  - 문제에 따라 O(n^2 * logn)
  - n * n 2차원 리스트를 모두 순회해야하는 문제가 많다.
- 입력이 1,000,000 이하
  - 최대 O(nlog n)
  - 힙, 우선순위 큐
  - 정렬
  - 동적 계획법
  - 위상 정렬
  - 다익스트라 알고리즘
- 입력이 100,000,000 이하
  - 최대 O(n)
  - 동적 계획법
  - 그리디
- 그 이상
  - 최대 O(log n)
  - 거의 출제되지 않음
  - 이진 탐색

# 문제 유형

## 입력값이 작은 문제

높은 확률로 완전 탐색 혹은 백트래킹 문제이다. 구현력이 중요한 문제로 출제될 가능성이 높다.

## 지도가 주워지고 채워진 영역을 찾아야 하는 경우

높은 확률로 BFS, DFS 문제이다. FloodFill과 같이 정직한 방식으로 나오거나 전염병 문제나 치즈 문제(https://www.acmicpc.net/problem/2636)처럼 살짝 변형되서 나오는 경우가 있다.

## 그래프 그림이 있는 경우

높은 확률로 세 가지 유형에 해당한다.

- 최단 거리 찾기
- 최소 신장 트리
- 위상 정렬 문제에서 
  - `'가장 빠른 길'`, `'최단 거리'`와 비슷한 키워드가 나온다면 당연히 최단 거리 찾기 유형이고, 
  - `"X 비용 내로 갈 수 있는 길을 찾아라"`와 같은 키워드가 나와도 최단 거리 찾기 유형이다. 
  - 다익스트라, BFS, DFS 등이 사용될 수 있다.

최소 신장 트리 문제는 보통 `"가장 저렴한 방법으로 모든 경로 연결해라"` 등의 키워드로 출제된다. `경로`가 아니라 `통신망`, `전송 시간`, `회로`, `배관` 등 다양한 용어로 나올 수는 있지만 핵심은 모든 경로를 `"가장 싸게 연결하라"`는 것이다. 

그래프는 양방향일수도 단방향일수도 있다. 크루스칼, 프림 알고리즘을 사용할 수 있다.

위상 정렬은 순서를 정해야할 때 사용된다. 보통 `"순서"`, `"차례"` 등의 키워드가 나오면 위상 정렬 문제이다.

## X라는 조건을 만족하는 최대/최소값

높은 확률로 결정 문제이다. 파라메트릭 서치를 이용해서 풀 수 있다.

## 실시간으로 정렬이 이루어져야 하는 경우

높은 확률로 우선순위 큐 혹은 힙을 사용하는 문제이다.

## DP 문제

보통 완전 탐색처럼 시간이 오래걸리면 안되는데 특별한 알고리즘을 사용하는 문제가 아닐 거 같을 때는 높은 확률로 DP 문제이다. 다른 문제처럼 유형을 특정할 수 있는 특징이 없어서 유형을 판단하기 어려운 경우 DP처럼 풀 수 있는지 생각해봐야 한다. 종이를 꺼내고 다음과 같은 방식으로 시도해 볼 수 있다.

1. 문제를 따라 먼저 초기값을 적는다.
2. 초기값을 포함해 모든 상태값을 적는다.
3. 현재 상태를 통해 다음 값을 구할 수 있는지 판단한다.
4. 혹은 이전 상태들을 통해 현재 값을 구할 수 있는지 판단한다. 이런 식으로 여러 번 해보고 식을 만들 수 있다면 DP 문제다.

## 문자열이 주어지는 경우

구현력 문제인 경우가 많다. 문자열을 자르거나, 붙이거나 탐색하는 문제가 대부분이다. 문자열을 탐색하는 알고리즘이 필요한 경우 KMP 알고리즘을 사용할 수 있다. 스크립트 언어는 대체로 빌트인 문자열 탐색이 존재한다.

## 현재 상황에서 가장 최적인 선택을 해야하는 경우

`항상 최적의 선택을 해야하는 경우` 혹은 `"가장 많은 선택을 할 수 있는"`, `"가장 작은/큰"` 등의 키워드가 들어가면 그리디 문제일 가능성이 높다. 최소 신장 트리도 그리디의 일종이다.