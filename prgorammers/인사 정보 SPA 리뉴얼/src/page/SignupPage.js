const $formContainer = document.querySelector('#form_container');

const nameInput = `
	<span class="form_elem">
		<label class="mark" for="name">이름</label>
 		<input 
		 	id="name" 
			placeholder="이름" 
			pattern="^[가-힣]{2,4}$" 
			title="2~4 글자의 한글만 입력이 가능합니다."
			required
		>
	</span>
`;

const emailInput = `
	<span class="form_elem">
		<label class="mark" for="name">이메일</label>
 		<input 
			id="name" 
			placeholder="이메일" 
			pattern="^[a-zA-Z0-9]+@grepp.co$"
			title="이메일 ID는 영문(대소문자 구분 없음)과 숫자만 입력 가능하며, @grepp.co 형식의 이메일만 입력이 가능합니다."
			required 
		>
	</span>
`;

const nicknameInput = `
	<span class="form_elem">
		<label class="mark" for="nickname">닉네임</label>
 		<input 
		 	id="nickname" 
			 placeholder="닉네임" 
			 pattern="^[a-zA-Z]{3,10}$"
			 title="대소문자 구분 없이 3~10 글자의 영문만 입력이 가능합니다."
			 required
			>
	</span>
`;

const roleSelect = `
	<span class="form_elem">
		<label class="mark" for="role">직군</label>
		<select id="role" name="role" required>
			<option value="">직군을 선택해주세요</option>
			<option value="backend">백엔드</option>
			<option value="frontend">프론트엔드</option>
			<option value="fullstack">풀스택</option>
		</select>
	</span>
`;
const mbtiTypes = [
  'ENFJ',
  'ENTJ',
  'ENFP',
  'ENTP',
  'ESFJ',
  'ESTJ',
  'ESFP',
  'ESTP',
  'INFJ',
  'INTJ',
  'INFP',
  'INTP',
  'ISFJ',
  'ISTJ',
  'ISFP',
  'ISTP',
];
const mbtiSelect = `
	<span class="form_elem">
		<label for="mbti">MBTI</label>
		<select id="mbti" name="mbti" required>
			<option value="">MBTI를 선택해주세요</option>
			${mbtiTypes.map((mbti) => `<option value="${mbti}">${mbti}</option>`)}
		</select>
	</span>
`;

const submitButton = `
	<span class="form_elem">
		<button type="submit">등록</button>
	</span>
`;

$formContainer.innerHTML = `
	<form>
		${nameInput}
		${emailInput}
		${nicknameInput}
		${roleSelect}
		${mbtiSelect}
		${submitButton}
	</form>
`;

$formContainer.querySelector('form').addEventListener('submit', () => {
  // TODO: 로컬스토리지와 중복 이메일, 닉네임 검사
  if (true) {
    alert('이메일 혹은 닉네임이 이미 등록되어 있습니다.');
    return;
  }

  alert('성공적으로 등록되었습니다.');
});
