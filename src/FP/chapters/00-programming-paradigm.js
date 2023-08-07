// --------------------------------------------------------------------------
// 📌 [프로그래밍 패러다임]
// --------------------------------------------------------------------------
// - 명령형, 선언형 프로그래밍 비교
// - 함수, 객체 지향 프로그래밍 비교
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 명령형 프로그래밍

const courses = [
  {
    id: 1,
    name: " imperative programming",
  },
  {
    id: 2,
    name: "declarative programming ",
  },
];

// console.log("원본 데이터\n", courses);
// 1. 과정 배열을 순환하여 각 과정 이름의 좌우 공백 제거
// 2. 과정 배열을 순환하여 각 과정 이름 대문자화

//* ES2015(v6)
//* 전개구문(spread syntax)을 사용하면 배열을 복사할 수 있다.

let updateCourses = [...courses];

// 기능 1. 좌우 공백 제거
//* 객체를 복제를 하지 않으면 참조에 의한 복사이므로 원본이 변경된다.
for (let i = 0, l = updateCourses.length; i < l; i = i + 1) {
  // 객체 복제는 어떻게???
  // [전개구문(spread syntax)]을 사용한다.
  // 얕은 복사 (shallow copy)
  const course = { ...updateCourses[i] };
  course.name = course.name.trim();
  updateCourses[i] = course;
}

// 기능 2. 대문자화
for (let i = 0, l = updateCourses.length; i < l; i = i + 1) {
  const course = updateCourses[i];
  course.name = course.name.toUpperCase();
}

// console.log("변형된 데이터\n", updateCourses);

// 기능 3. 배열 원소의 name 속성의 공백을 밑줄로 변경하는 기능 추가
for (let i = 0, l = updateCourses.length; i < l; i = i + 1) {
  const course = updateCourses[i];
  course.name = course.name.replace(/\s+/g, "_");
  updateCourses[i] = course;
}
// console.log(updateCourses);

//? Object.is() : 메서드를 사용하여 두 값이 같은지 확인합니다. true 또는 false를 반환합니다.
//? console.assert() : 주어진 조건이 거짓인 경우 콘솔에 오류 메시지를 출력합니다.
// console.assert(
//   Object.is(courses, updateCourses),
//   "course와 updateCourses는 동일한 객체가 아닙니다."
// );

//* 원시(primitive)데이터는 immutable(불변)데이터이다.
//* 원시(primitive)데이터 : string, number, boolean, null, undefined, symbol;
//* 객체(object) 데이터 : array, object, function;
//* 객체(object)데이터는 mutable(가변)데이터이다.

//* 재귀함수 / 클로저 /  커링(Currying)함수 /고차함수(HOC)

//? 재귀함수 : 함수가 자기 자신을 호출하는 함수

//? 클로저 : 함수가 함수를 반환하는 함수 // 클로저는 함수와 그 함수가 선언된 렉시컬 스코프(lexical scope) 사이의 관계를 나타내는 개념입니다.
//? 클로저는 내부 함수가 외부 함수의 변수에 접근할 수 있는 경우를 의미합니다.내부 함수가 외부 함수의 범위에서 실행될 때, 내부 함수는 외부 함수의 변수를 기억하고 사용할 수 있습니다.
//? 클로저는 주로 비동기 처리, 데이터 은닉, 프라이빗 변수 등의 상황에서 활용됩니다.

//? 커링 함수 : 함수가 함수를 반환하는 함수 // 커링은 함수의 인자를 여러 개의 함수로 나누는 기법을 의미합니다.
//? 커링 함수는 여러 개의 인자를 받는 함수를 각각 하나의 인자를 받는 함수의 연속으로 나누어 구현하는 것입니다. 이를 통해 함수의 재사용성과 구성성을 높일 수 있습니다.

//? HOC : 함수가 함수를 반환하는 함수 // 고차 함수는 함수를 인자로 받거나 함수를 반환하는 함수를 의미합니다. 주로 함수의 재사용성을 높이거나, 로직의 추상화를 통해 코드를 더 모듈화하는 데 사용됩니다.
//? 리액트(React)에서 HOC는 컴포넌트를 감싸는 패턴으로 사용되며, 컴포넌트 간의 공통 로직을 추상화하여 재사용성을 높이는 데 활용됩니다.

// --------------------------------------------------------------------------
// 선언형 프로그래밍

const subjects = [
  {
    id: 1,
    name: " imperative programming",
  },
  {
    id: 2,
    name: "declarative programming ",
  },
];

// console.log("원본 데이터\n", subjects);

// 1. 객체 이름(name) 속성 좌우 공백 제거 함수 선언
function toTrim(object) {
  const o = { ...object };
  o.name = o.name.trim();
  return o;
}

// 2. 객체 이름(name) 속성 대문자화 함수 선언
function toUpperCase(object) {
  const o = { ...object };
  o.name = o.name.toUpperCase();
  return o;
}

// 3. 배열 원소의 name 속성의 공백을 밑줄(_)로 변경하는 기능 추가
function toUnderscore(object) {
  const o = { ...object };
  o.name = o.name.replace(/\s+/g, "_");
  return o;
}

//--------------------------------------------------------------------------

// console.log(toTrim(subjects[0]));
// console.log(toTrim(subjects[1]));
// console.log(toUpperCase(subjects[0]));
// console.log(toUpperCase(subjects[1]));

//? 단일책임원칙(SRP) : 하나의 함수는 하나의 기능만 수행해야 한다.

// 3. 과목 이름 "좌우 공백 제거" → "대문자화" 후, 새로운 과목 배열 생성
//* ES5의 map을 사용해야 한다.
//* 조건 1. 새로운 배열 반환
//* 조건 2. 배열 순환 후, 기능 처리(적용)

// const updateSubjects = subjects
//   .map((subject) => {
//     const copySubject = toTrim(subject);
//     return copySubject;
//     return subject;
//   })
//   .map((subject) => {
//     const copySubject = toUpperCase(subject);
//     return copySubject;
//   });

//* 위 코드 개선
//? map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
const updateSubjects = subjects.map(toTrim).map(toUpperCase).map(toUnderscore);

// console.log("업데이트 데이터\n", updateSubjects);

// --------------------------------------------------------------------------
// JavaScript 프로그래밍 패러다임
// → 함수(function)를 사용해 구현합니다.

//* count는 처음 시작하는 수, step은 증가하는 수

function createCountUpButton(container, { count: initialCount = 0, step = 1 } = {}) {

  if (!container || container.nodeType !== document.ELEMENT_NODE) {
    throw new Error("container는 문서의 요소가 아닙니다.");
  }
  console.log({ initialCount, step });

  let count = initialCount;

  const countUpButton = document.createElement("button");

  const render = (newCount) => {
    countUpButton.textContent = String(newCount);
  };

  const handleCountUp = () => {
    console.log("click");
    count += step;
    render(count);
  };

  countUpButton.setAttribute("type", "button");
  countUpButton.classList.add("countUpButton");
  countUpButton.addEventListener("click", handleCountUp);
  render(count);

  container.append(countUpButton);
}

// const demoContainer = document.getElementById("demo");

//* 기본값 : {count: 0, step: 1} => react에서 props와 같은 개념
//! 과제) 기본값에 max = 10 추가해서 10이 되면 더이상 카운팅 되지 않게 설계
//* max prop을 추가하고, count 값이 max보다 커지면 사용자가 더 이상 버튼을 누를 수 없도록 막는다.
//* max prop을 추가하고, count 값이 max보다 커지면 화면의 카운트는 버튼을 눌러도 max 값에 머무른다.
//? 상태로 입력에 반응 참고

// createCountUpButton(demoContainer);
// createCountUpButton(demoContainer, { count: 1 });
// createCountUpButton(demoContainer, { count: 2 });
// createCountUpButton(demoContainer, { count: 3, step: 2 });

// --------------------------------------------------------------------------
// JavaScript 프로그래밍 패러다임
// → 클래스(class)를 사용해 구현합니다. (참고: https://mzl.la/3QrTKlF)

//* 붕어빵틀(생성자함수: 클래스) 
class CountUpButton {
  constructor(userOptions) {
    this.#config = { ...CountUpButton.defaultProps, ...userOptions };
    this.init()
  }

  init() {
    console.log(this.#config);
  }

  //? static? : 정적 메서드는 클래스의 인스턴스 없이 호출할 수 있는 메서드입니다.
  // static field
  static defaultProps = {
    count: 0,
    step: 1,
  };
}


//* 새로운(new) 붕어빵(인스턴스: 객체) 생성
const firstCountUp = new CountUpButton({
  count: 2, 
  step: 7,
});
const secondCountUp = new CountUpButton();
const thirdCountUp = new CountUpButton();

const demoContainer = document.getElementById("demo");

// demoContainer.append(firstCountUp.render()); 
// --------------------------------------------------------------------------
// 웹 컴포넌트(Web Components) API
// → 웹 컴포넌트를 사용해 구현합니다. (참고: https://mzl.la/3YjFdu9)

//! 리액트 잘하려면? 단일 책임 원칙에 의한 재사용이 가능한 함수를 잘 만들어야 한다.
