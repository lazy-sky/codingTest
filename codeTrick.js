// 1. 구조 분해 할당을 이용한 변수 swap
let a = 1;
let b = 2;
[a, b] = [b, a];

// 2. 배열 생성으로 루프 제거
let sum = 0;
for (let i = 5; i < 10; i += 1) {
  sum += i;
}

const sum = Array.from(new Array(5), (_, k) => k + 5) // [5, 6, 7, 8, 9], 콜백 두 번째 인자가 인덱스
  .reduce((acc, cur) => acc + cur, 0);

// from 이용하기
// 문자열에서 배열 만들기
Array.from('foo'); // ["f", "o", "o"]

// 화살표 함수와 함께
Array.from([1, 2, 3], (x) => x + x); // [2, 4, 6]
Array.from({ length: 5 }, (v, i) => i); // [0, 1, 2, 3, 4]

// 3. 배열 내 같은 요소 제거하기
const names = ['Lee', 'Kim', 'Park', 'Lee', 'Kim'];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];

// 4. 전개 연산자를 이용한 객체 병합
const person = {
  name: 'sky',
};

const company = {
  address: 'Seoul',
};

const me = { ...person, ...company };
console.log(me); // { name: 'sky', address: 'Seoul' }

// 5. &&, || 활용
// ||
// 기본값 할당
// participantName이 0, undefined, 빈 문자열, null일 경우 'Guest'로 할당된다.
const name = participantName || 'Guest';

/// &&
// flag가 true일 경우에만 실행
flag && func();

// 객체 병합에도 이용
const makeCompany = (showAddress) => {
  return {
    name: 'Sky Inc.',
    ...(showAddress && { address: 'Seoul' }),
  };
};
console.log(makeCompany(false)); // { name: 'Sky Inc.' }
console.log(makeCompany(true)); // { name: 'Sky Inc.', address: 'Seoul' }

// 6. 구조 분해 할당
const person = {
  name: 'Kim Sky',
  familyName: 'Kim',
  givenName: 'Sky',
  company: 'Sky. Inc.',
  address: 'Seoul',
};

const { familyName, givenName } = person;

// 7. 비구조화 할당
// 함수에 객체를 넘길 경우 필요한 것만 꺼내서 쓴다.
const makeCompany = ({ name, address, serviceName }) => {
  return {
    name,
    address,
    serviceName,
  };
};

// 8. 동적 속성 이름
// 객체의 키를 동적으로 생성한다.
const nameKey = 'name';
const emailKey = 'email';
const person = {
  [nameKey]: 'sky',
  [emailKey]: 'email@naver.com',
};

// !! 연산자를 사용하여 Boolean 값으로 바꾸기
// 0, null, 빈 문자열, undefined, NaN을 false로
// 그 외에는 true로 변경할 수 있다.

function check(variable) {
  if (!!variable) {
    console.log(variable);
  } else {
    console.log('잘못된 값');
  }
}
check(null); // 잘못된 값
check(3.14); // 3.14
check(undefined); // 잘못된 값
check(0); // 잘못된 값
check('Good'); // Good
check(''); // 잘못된 값
check(NaN); // 잘못된 값
check(5); // 5
