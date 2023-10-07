let num: number = 1;
// num = 'str' // number형에 string이 와서 오류를 띄워줌 (실시간 디버깅)
let str: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

// array, object
// array: 길이를 미리 명시해둘 필요는 X, elements의 type은 명시 필요.
let arr: string[];
const numArr: number[] = [1, 2, 3, 4, 5];
let strArr: Array<string> = ["apple", "tomato"];

// 배열에 여러 개의 타입 넣기
// 1. number or string배열 arr1
let arr1: (number | string)[] = [1, 2, 3, "one", "two", "three"];
// 2. boolean or null or number[] 배열 arr2
let arr2: Array<boolean | null | number[]> = [true, null, [10, 20]];
// 3. 어떤 자료형이든 상관없이 들어갈 수 있는 배열 arrAny
// any type은 타입을 정확하게 명시하기 어려울 때 사용, 과다한 사용은 좋지 않다.
let arrAny: any[] = [1, 2, "str", true];

// object
let object: object = {
  name: "hi",
  age: 10,
};

console.log(object);
