/*
정렬의 특징
- 정렬 기준은 사용자가 정할 수 있다.
- 크게 비교식과 분산식 정렬로 나눌 수 있다.
- 대부분의 언어가 빌트인으로 제공해준다.
- 삽입, 선택, 버블, 머지, 힙, 퀵 정렬 등 다양한 정렬 방식이 존재한다.

비교식 정렬
- 버블 정렬: O(n^2), 서로 인접한 두 요소를 검사하여 정렬
- 선택 정렬: O(n^2), 선택한 요소와 가장 우선순위가 높은 요소를 교환하는 정렬
- 삽입 정렬: O(n^2), 선택한 요소를 삽입할 수 있는 위치를 찾아 삽입하는 방식의 정렬

분산식 정렬(분할 정복을 이용)
- 합병 정렬: O(n log n), 분할 정복을 이용한 최선과 최악이 같은 안정적인 정렬
- 퀵 정렬: O(n log n), 매우 빠르지만 최악의 경우가 존재하는 불안정 정렬
*/
