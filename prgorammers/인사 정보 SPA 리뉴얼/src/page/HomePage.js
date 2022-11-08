const $cardsContainer = document.querySelector('#cards_container');

// TODO: 모듈 분리
const getPeopleData = () =>
  fetch('/web/src/data/new_data.json').then((data) => data.json());

// TODO: 에러 핸들링
const peopleData = (await getPeopleData()) || [];

const peopleHTML = peopleData.reduce((acc, person, idx) => {
  const { nickname, mbti } = person;

  return (
    acc +
    `
		<div idx="${idx + 1}" class="card">
			<div class="card_plane card_plane--front">${nickname}</div>
			<div class="card_plane card_plane--back">${mbti}</div>
		</div>
	`
  );
}, '');

$cardsContainer.innerHTML = peopleHTML;

const $cards = document.querySelectorAll('.card');
$cards.forEach((card) => {
  card.addEventListener('click', () => {
    if (card.classList.contains('is-flipped')) {
      card.classList.remove('is-flipped');
      return;
    }

    card.classList.add('is-flipped');
  });
});

// TODO: 로컬 스토리지와 상태 연동
