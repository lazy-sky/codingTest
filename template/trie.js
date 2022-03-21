/*
트라이의 특징
- 검색어 자동완성, 사전 찾기 등에 응용될 수 있다.
- 문자열을 탐색할 때 단순하게 비교하는 것보다 효율적으로 찾을 수 있다.
- 삽입은 O(L), L은 문자열의 길이
- 대신 각 정점이 자식에 대한 링크를 전부 가지고 있기 때문에 저장 공간을 더 필요로 한다.

트라이 구조
- 루트는 비어있다.
- 각 간선(링크)은 추가될 문자를 키로 가진다.
- 각 정점은 이전 정점의 값 + 간선의 키를 갑으로 가진다.
- 해시 테이블과 연결 리스트를 이용하여 구현할 수 있다.
*/

class Node {
  constructor(value = '') {
    this.value = value;
    // this.count = 0;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      } else {
        console.log(currentNode.children);
      }

      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) return false;
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
}

function TrieWithCount(words) {
  const root = {};
  for (const word of words) {
    let current = root;
    for (const letter of word) {
      if (!current[letter]) {
        current[letter] = [0, {}];
      }
      current[letter][0] = current[letter][0] + 1;
      current = current[letter][1];
    }
  }

  return root;
}

const trie = new Trie();
trie.insert('cat');
trie.insert('can');
trie.insert('cab');
trie.insert('ab');
trie.insert('ad');
trie.insert('ae');
console.log(trie);
// console.log(trie.root.children);
// console.log(trie.has('cat'));
// console.log(trie.has('can'));
// console.log(trie.has('cap'));
// console.log(trie.root.children.size);
// console.log(trie.root.children.get('c').children.get('a').children.size);
