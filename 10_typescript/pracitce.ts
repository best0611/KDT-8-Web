// 실습.1
let olimpic_newgame: readonly [object, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];
// olimpic_newgame[1] = false;

// 실습.2
type Category = "액션" | "롤플레잉";
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: Category;
  platform: string;
}
let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};
let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};
// console.log("A: ", heroGame_A);
// console.log("B: ", heroGame_B);

// 실습.3
function sum1(a: number, b: number): void {
  console.log("실습 3: ", a + b);
}
sum1(5, 11);
// 실습.4
// ...a : 나머지 매개변수, 남아있는 매개변수들을 한데 모아 배열 a에 집어넣는다.
// 항상 마지막에 넣어야 함
const sum2 = (b: number, ...a: number[]): number => {
  let sum = 0;
  a.forEach((el) => (sum += el));
  return sum;
};
console.log("실습 4: ", sum2(1, 2, 3, 4, 10)); // 19 (b에 1이 들어감)

// 실습.5
function arrElement<T>(arr: T[], idx: number): T | boolean {
  if (arr.length < idx + 1) {
    return false;
  } else {
    return arr[idx];
  }
}
console.log(arrElement<string>(["a", "b", "c", "d", "e"], 2));
console.log(arrElement<number>([1, 2], 3));
