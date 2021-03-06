function Nodes({ $parent, initialState, onClick }) {
  this.state = initialState;

  // Nodes 컴포넌트를 렌더링할 돔을 this.$target이라는 이름으로 생성
  this.$target = document.createElement('ul');
  $parent.appendChild(this.$target);

  // state를 받아서 현재 컴포넌트의 state를 변경하고 다시 렌더링하는 함수
  this.setState = (nextState) => {
    this.state = nextState;
    // render 함수 내에서 this.state 기준으로 렌더링을 하기 때문에,
    // 단순히 이렇게만 해주어도 상태가 변경되면 화면이 알아서 바뀐다.
    this.render();
  };

  this.onClick = onClick;

  // 파라미터가 없는 Nodes의 render 함수
  // 현재 상테 기준으로 렌더링한다.
  this.render = () => {
    if (this.state.nodes) {
      // ...
      const nodesTemplate = this.state.nodes
        .map((node) => {
          // ...

          return ``;
        })
        .join('');
    }

    this.$taget.innerHTML = this.state.nodes.map(
      (node) => `<li>${node.name}</li>`,
    );
  };

  // 렌더링된 이후 클릭 가능한 모든 요소에 click 이벤트 걸기
  this.$target.querySelectorAll('.Node').forEach(($node) => {
    $node.addEventListener('click', (e) => {
      // dataset을 통해 data-로 시작하는 attribute를 꺼내올 수 있다.
      const { nodeId } = e.target.dataset;
      const selectedNode = this.state.nodes.find((node) => node.id === nodeId);

      if (selectedNode) {
        this.onClick(selectedNode);
      }
    });
  });

  // 인스턴스화 이후 바로 render 함수를 실행하며 new로 생성하자마자 렌더링되도록 할 수 있다.
  this.render();
}

// e.g.,
const $app = document.querySelector('.app');
const initialState = {
  nodes: [],
};
const nodes = new Nodes({ $app, initialState });
const nextState = {
  nodes: [
    // ...
  ],
};

nodes.setState(nextState);
