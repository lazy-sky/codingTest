const titleMap = {
  '/web/home': 'Great PeoPle',
  '/web/signup': 'Sign Up, GreatPeoPle!',
};

const $contentTitle = document.querySelector('.content_title h1');

$contentTitle.innerText = titleMap[location.pathname];
