// 힙은 이진 트리 형태를 가지며 우선순위가 높은 요소가 먼저 나가기 위해 요소가 삽입, 삭제될 때 바로 정렬되는 특징이 있다.
// 우선순위 큐 === 힙 (x)
// 힙은 우선순위 큐 구현을 위한 자료구조 중에 하나 (o)

/*
힙의 특징
- 우선순위가 높은 요소가 먼저 나간다.
- 루트가 가장 큰 값이 되는 최대 힙과 가장 작은 값이 되는 최소 힙이 있다.
- 자바스크립테으센 직접 구현해서 사용해야 한다.

힙 요소 추가
- 요소가 추가될 때는 트리의 가장 마지막에 정점에 위치한다.
- 추가 후 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꾼다.
- 이 과정을 반복하면 결국 가장 우선순위가 높은 정점이 루트가 된다.
- 완전 이진 트리의 높이는 log N이기 때문에 힙 추가 알고리즘은 O(log N)이다.

힙 요소 제거
- 요소 제거는 루트 정점만 가능하다.
- 루트 정점이 제거된 후에 가장 마지막 정점이 루트에 위치한다.
- 루트 정점의 두 자식 정점 중 더 우선순위가 높은 정점을 바꾼다.
- 두 자식 정점이 우선순위가 더 낮을 때까지 반복한다.
- O(log N)
*/

// 매 루프마다 가장 큰 값(혹은 작은 값)을 찾아 처리해야 한다면 방법은 세 가지인데,
// - 매 루프다마 Math.max -> O(n)
// - 매 루프마다 정렬 -> O(n log n)
// - Heap 이용
// 따라서 매 루프마다 가장 큰 값을 알아야 한다면 무조건 Heap을 사용하는 것이 좋다.

class MaxHeap {
  constructor() {
    // 내부적으로 관리할 배열, 편의상 0번 인덱스는 null로 비워둔다.
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

    const retrunValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return retrunValue;
  }
}

const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap);

heap.pop();
console.log(heap.heap);

heap.pop();
console.log(heap.heap);

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
      this._swap(parentIndex, currentIndex);

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 가중치가 있는 경우의 예시
    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex].cost > this.heap[leftIndex].cost) ||
      (this.heap[rightIndex] &&
        this.heap[currentIndex].cost > this.heap[rightIndex].cost)
    ) {
      // 왼쪽 정점이 없을 경우
      if (this.heap[leftIndex] === undefined) {
        this._swap(rightIndex, currentIndex);
        // 오른쪽 정점이 없을 경우
      } else if (this.heap[rightIndex] === undefined) {
        this._swap(leftIndex, currentIndex);
      } else if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
        this._swap(rightIndex, currentIndex);
      } else if (this.heap[leftIndex].cost <= this.heap[rightIndex].cost) {
        this._swap(leftIndex, currentIndex);
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  _swap(a, b) {
    // 편의를 위해 배열의 요소를 swap하는 함수 작성
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
