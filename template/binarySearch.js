/*
이진 탐색의 특징
- 정렬돼있어야 사용할 수 있다.
- 배열 혹은 이진 트리를 이용하여 구현할 수 있다.
- O(log n)

문제점
- 최악의 경우 한쪽으로 편향된 트리가 될 수 있다.
  - 그런 경우 순차 탐색과 동일한 시간 복잡도를 가진다.
  - 이를 해결하기 위해 다음과 같은 자료구조를 이용할 수 있다.
    - AVL 트리
    - 레드-블랙 트리
*/

/*
파라메트릭 서치와의 비교
파라메트릭 서치는 '최적화 문제를 결정문제로 바꾸어 푸는 것'이다.
- 최적화 문제: 문제의 상황을 만족하는 특졍 변수의 최솟값, 최댓값을 구하는 문제
- 결정 문제: 예 혹은 아니오로 대답할 수 있는 문제

이를테면 배열 안의 값들 중에서 조건 A에 해당하는 최솟값을 찾는 상황의 문제를
배열의 어떤 원소가 조건 A를 충족시키는지 묻는 문제로 변경하는 것이다.

그렇다면 이 상황에서 어떤 원소에게 조건 A를 충족시키는지 물어볼지가 관건인데,
당연히 배열이 정렬되어 있다면 중간 원소에게 묻는 것이 현명하다.
중간 원소가 Yes라면 왼쪽으로, No라면 오른쪽으로 범위를 옮겨 작업을 반복하게 된다.

이렇듯 파라메트릭 서치는 문제를 풀어나가는 과정이 이분 탐색과 매우 흡사하다.
파라메트릭 서치는 최적화 문제를 조금 더 쉽게 풀 수 있도록 해준다.
파라메트릭 서치의 핵심은 결정 문제다. 
해당 값이 정답이 될 수 있는 값인지 아닌지를 쉽게 판단할 수 있어야,
즉, 결정 문제를 쉽게 풀 수 있어야 최적화 문제를 파라메트릭 서치로 풀 수 있다. 
또한 정답이 될 수 있는 값들이 연속적(정렬된 범위)이어야 파라메트릭 서치를 이용할 수 있다. 
예를 들어, 어떤 조건을 만족하는 최솟값을 구하는 최적화 문제가 있다고 할 때, 
정답이 될 수 있는 값들이 연속적이어야 한다는 말은, 정답이 x라고 했을 때, x이상의 값들은 모두 조건을 만족해야 한다는 것을 의미한다.

요컨대, 아래 조건들을 충족한다면 파라메트릭 서치를 이용해 문제를 풀 수 있다.
  1. 결정 문제를 정의했을 때, 쉽게 풀 수 있는 경우
  2. 최솟값(최댓값)이 x라면, x 이상(이하)의 값에 대해서는 모두 조건을 만족
*/

// 배열 이용
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    if (array[mid] === target) return mid;

    if (array[mid] < target) left = mid + 1;
    else right = mid - 1;

    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

const array = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];
console.log(binarySearch(array, 2876));
console.log(binarySearch(array, 1));
console.log(binarySearch(array, 500));

// 이진 트리 이용
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }

        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);

console.log(tree.has(8));
console.log(tree.has(1));
