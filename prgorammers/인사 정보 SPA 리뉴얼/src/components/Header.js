const $home = document.querySelector('#menu_home');
const $signUp = document.querySelector('#menu_signup');

$home.addEventListener('click', (e) => {
  location.href = 'home';
  console.log(e);
});

$signUp.addEventListener('click', (e) => {
  location.href = 'signup';
  console.log(e);
});
