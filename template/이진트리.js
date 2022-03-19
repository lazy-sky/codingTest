// 0번 인덱스는 편의를 위해 비워둔다.
// Left = Index * 2
// Right = Index * 2 + 1
// Parent = floor(Index / 2)
const treeByArray = [undefined, 9, 3, 8, 2, 5, undefined, 7, 4];

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

// 위와 동일한 이진 트리
const treeByLinkedList = new Tree(new Node(9));
treeByLinkedList.root.left = new Node(3);
treeByLinkedList.root.right = new Node(8);
treeByLinkedList.root.left.left = new Node(2);
treeByLinkedList.root.left.right = new Node(5);
treeByLinkedList.root.right.right = new Node(7);
treeByLinkedList.root.left.right.right = new Node(4);

treeByLinkedList.display();
