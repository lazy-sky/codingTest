const imagePathPrefix = '';

function ImageView({ $parent, initialState }) {
  // image url
  this.state = initialState;
  this.$target = document.createElement('div');
  this.$target.className = 'Modal ImageView';

  $parent.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `
    <div>
      ${this.state ? `<img src=${imagePathPrefix}${this.state}` : ''}
    </div>
    `;

    this.$target.style.display = this.state ? 'block' : 'none';
  };

  this.render();
}
