// 튜플 타입 선언
let drink: [string, number];

// 튜플 초기화
drink = ["cola", 2000];

// 튜플 선언, 초기화
let drink2: [string, number] = ["cola", 2000];

// js 배열과 동일하게 인덱스 접근 가능, 메서드 사용 가능
console.log(drink[0]);
// spread 연산자도 사용 가능
console.log([...drink2, "콜라공장"]);

// readonly : 데이터 변경X
let drink3: readonly [string, number] = ["sprite", 2000];
// drink3.push("콜라공장"); // error

// -----------------enum----------------
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "americano",
  latte = "latte",
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

console.log(Cafe.americano);
console.log(Cafe.latte);

enum Cake {
  chocolate, // 0
  vanilla, // 1
  strawberry, // 2
  kiwi = "kiwi", // 숫자와 문자열 같이 쓸 수 있음 (이왕이면 통일하는 것이 좋다)
}

console.log(Cake.chocolate);
console.log(Cake.vanilla);

// --------------any-----------------
let val: any;
let anyVal;

// 사용자 정의 타입
// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "luna",
  isPassed: true,
};

// 2. type
type Score = "A+" | "A" | "B" | "C" | "D";
const score1: Score = "A+";
// const score2: Score = "F"; // error

// interface 상속도 가능
interface 야구부 extends Student {
  position: string;
  weight: number;
  height: number;
  // key-value 타입이 여러개 올 수 있을 때
  // grade라는 이름이 key가 되는 건 아니고 의미를 부여해주는 역할
  [grade: number]: Score;
  readonly backNumber?: number; // 필수가 아니라면 물음표 처리
}

const tiger: 야구부 = {
  name: "tiger",
  isPassed: true,
  position: "pitcher",
  weight: 90,
  height: 180,
  1: "A",
  2: "A+",
};

console.log(tiger);
// 점 접근법 or 대괄호 접근법으로 value 변경 가능
tiger["1"] = "C";
tiger.isPassed = false;
// tiger.backNumber = 19; // readonly 변경 불가
console.log("변경 후: ", tiger);

// -----------------함수의 타입 설정하는 인터페이스----------------
interface Add {
  (a: number, b: number): number;
}
const sum: Add = function (num1, num2) {
  return num1 + num2;
};

// 교차 타입
interface Toy {
  name: string;
  start(): void;
}
interface Car {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: "tayo",
  start() {
    console.log(this.name);
  },
  color: "blue",
  price: 20000,
};

toyCar.start();

// type도 interface처럼 object에 선언 가능
type Person = {
  name: string;
  age?: number;
  like?: string[];
};

let person1: Person = {
  name: "person1",
  age: 20,
  like: ["blue", "apple"],
};
