const arr = [1, 3, 5, 7, 9];
arr.map((x, i) => x + 1);

// 배열 0부터 1000까지 담긴 코드 만들기 [0~1000]
const q1 = Array(1001)
  .fill(0)
  .map((x, i) => i);
console.log(q1);

// 배열 5의 배수 0부터 100까지

const q2 = Array(105 / 5)
  .fill(0)
  .map((x, i) => i * 5);
// Array(21)
//   .fill(0)
//   .map((x, i) => i)
//   .filter((x) => i % 5 == 0);
console.log(q2);

// 0~100 3의배수는 💌 5의 배수는 💢 15의 배수는 💥
//나머지는 숫자
const q3 = Array(101)
  .fill(0)
  .map((x, i) => i)
  .map((x) => {
    if (x % 3 == 0 && x % 5 == 0) return "💥";
    else if (x % 3 == 0) return "💌";
    else if (x % 5 == 0) return "💢";
    else return x;
  });

// const q3 = Array(101)
//   .fill(0)
//   .map(
//     (x, i) =>
//       (i % 3 == 0 ? "💌" : i) ||
//       (i % 5 == 0 ? "💢" : i) ||
//       (i % 15 == 0 ? "💥" : i)
//   );
console.log(q3);

// [1900~2025]
//[{연도:1900, 띠:🐭},{연도:1901,띠:"🐮"}]
const makeZodiac = (to, from) => {
  const zodiac = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return Array(1026)
    .fill(0)
    .map((x, i) => i + 1900)
    .map((v) => {
      return { 연도: v, 띠: zodiac[v % 12] };
    });
};
const result = makeZodiac(1900, 2025);
console.log(result);
