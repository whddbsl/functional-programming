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

//* ES2015(v6) - 전개구문(spread syntax)을 사용하면 배열을 복사할 수 있다.

let updateCourses = [...courses];
// console.log("원래 데이터\n", courses);
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
//? 여기서는 왜 안에서 한번 더 복사를 하지 않을까?
//> 이미 첫 번째 for문에서 'updateCourses[i] = course'를 통해 복사가 되었기 때문에
//> 두 번째 for문에서는 updateCourses 배열의 객체를 수정해도 원본 배열은 영향을 받지 않는다.

for (let i = 0, l = updateCourses.length; i < l; i = i + 1) {
  const course = updateCourses[i];
  course.name = course.name.toUpperCase();
}
console.log("변형된 데이터\n", updateCourses);

// 기능 3. 배열 원소의 name 속성의 공백을 밑줄로 변경하는 기능 추가
for (let i = 0, l = updateCourses.length; i < l; i = i + 1) {
  const course = updateCourses[i];
  course.name = course.name.replace(/\s+/g, "_");
  updateCourses[i] = course;
}
console.log(updateCourses);

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
//* initialCount는 별칭
function createCountUpButton(
  container,
  { count: initialCount = 0, step = 1 } = {}
) {
  if (!container || container.nodeType !== document.ELEMENT_NODE) {
    throw new Error("container는 문서의 요소가 아닙니다.");
  }
  console.log({ initialCount, step });

  let count = initialCount;

  const countUpButton = document.createElement("button");

  //? newCount를 String으로 변환하는 이유?
  //> textContent는 문자열만 받기 때문에
  //* 초기 값 설정
  const render = (newCount) => {
    countUpButton.textContent = String(newCount);
  };

  //* 클릭 시 count 증가
  const handleCountUp = () => {
    console.log("click");
    count += step;
    render(count);
  };

  //* 버튼 속성 설정
  countUpButton.setAttribute("type", "button");
  //* 버튼 클래스 설정
  countUpButton.classList.add("countUpButton");
  countUpButton.addEventListener("click", handleCountUp);
  //? 여기서 render(count) 한번 더 호출하는 이유?
  //> 초기 값 설정을 위해
  render(count);

  //* 버튼을 container에 추가
  container.append(countUpButton);
}

//* 버튼을 생성할 곳 지정
// const demoContainer = document.getElementById("demo");

//* 기본값 : {count: 0, step: 1} => react에서 props와 같은 개념
//! 과제) 기본값에 max = 10 추가해서 10이 되면 더이상 카운팅 되지 않게 설계
//* max prop을 추가하고, count 값이 max보다 커지면 사용자가 더 이상 버튼을 누를 수 없도록 막는다.
//* max prop을 추가하고, count 값이 max보다 커지면 화면의 카운트는 버튼을 눌러도 max 값에 머무른다.
//> (노션) 상태로 입력에 반응 참고

//* 기본 값으로 버튼 생성
// createCountUpButton(demoContainer);
//* count:1 로 버튼 생성
// createCountUpButton(demoContainer, { count: 1 });
// createCountUpButton(demoContainer, { count: 2 });
// createCountUpButton(demoContainer, { count: 3, step: 2 });

// --------------------------------------------------------------------------
// JavaScript 프로그래밍 패러다임
// → 클래스(class)를 사용해 구현합니다. (참고: https://mzl.la/3QrTKlF)

//! 클래스는 잘 모르겠음 ㅋㅎ
//* 붕어빵틀(생성자함수: 클래스)
// class CountUpButton {
//   constructor(userOptions) {
//     //? #config : 클래스 내부에서만 사용할 수 있는 private field
//     this.#config = { ...CountUpButton.defaultProps, ...userOptions };
//     this.init();
//   }

//   //? 여기서 init() 함수를 만들어서 사용하는 이유?
//   //> 생성자 함수에서는 비동기 함수를 사용할 수 없기 때문에
//   init() {
//     console.log(this.#config);
//   }

//   //? defaultProps앞에 static을 붙이는 이유?
//   //> 클래스의 인스턴스를 생성하지 않고도 접근할 수 있기 때문에
//   static defaultProps = {
//     count: 0,
//     step: 1,
//   };
// }

//* 새로운(new) 붕어빵(인스턴스: 객체) 생성
// const firstCountUp = new CountUpButton({
//   count: 2,
//   step: 7,
// });
// const secondCountUp = new CountUpButton();
// const thirdCountUp = new CountUpButton();

// const demoContainer = document.getElementById("demo");

// demoContainer.append(firstCountUp.render());
// --------------------------------------------------------------------------
// 웹 컴포넌트(Web Components) API
// → 웹 컴포넌트를 사용해 구현합니다. (참고: https://mzl.la/3YjFdu9)

class CountUpButtonComponent extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = /*html*/ `
    <button type="button">9</button>
    `;
  }
}
//* 무조건 케밥 케이스 사용
customElements.define("count-up-button", CountUpButtonComponent);

//! 리액트 잘하려면? 단일 책임 원칙에 의한 재사용이 가능한 함수를 잘 만들어야 한다.

//* 2일차
class CountUpButton {
  //* static field
  static version = "0.0.1-alpha";

  //* 기본 Props
  static defaultProps = {
    count: 0,
    step: 1,
    max: 10,
  };

  //* private field
  //* must be declared
  #count;
  #props = {};
  #button = null;

  //* 라이프 사이클 메서드
  //> 생성(constructor) 시점
  constructor(props) {
    console.log("생성 시점");
    //? 꼭 객체로 state를 관리해야 할까?
    // this.state = {
    //   count: props.count ?? 0,
    // };
    //* 클래스가 생성한 인스턴스의 상태
    this.#count = props.count ?? 0;
    //* 인스턴스가 사용할 데이터(외부에서 사용자가 전달한 데이터와 병합)
    this.#props = { ...CountUpButton.defaultProps, ...props };
  }

  //* 렌더 (HTMLElement Node)
  //* return type : HTMLButtonElement
  render() {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.textContent = String(this.#count);
    this.#button = button;

    this.bindEvents();

    return button;
  }

  //* 렌더 (HTML String)
  //* return type : string
  renderHTML() {
    return `
    <button type="button">${String(this.#count)}</button>
    `;
  }

  bindEvents() {
    this.#button.addEventListener("click", (e) => {
      console.log(e.target);
    });
  }

  //> 마운트(mount) 시점 -> 실제 DOM에 추가
  //* 버튼이 ELEMENT이므로 append()를 사용한다.
  //* HTML이면 insertAdjacentHTML()을 사용한다.
  mount(container) {
    //* ELEMENT이면 -> type : object
    container?.append?.(this.render());
    //* HTML이면 -> type : string
    container?.insertAdjacentHTML?.("beforeend", this.renderHTML());
  }

  //> 성장(update) 시점
  //> 소멸(unmount) 시점
  unmount() {
    console.log("소멸 시점");
  }
}

const firstCountUp = new CountUpButton({
  count: 9,
});

globalThis.firstCountUp = firstCountUp;

const demoContainer = document.getElementById("demo");

firstCountUp.mount(demoContainer);
