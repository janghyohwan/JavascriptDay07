// const arr = [1, 3, 5, 7, 9];

// 💥.map()💥 🍗개중요 짱중요 쌉중요 ㅈㄴ중요 이거만 먹어도 개꿀쌉꿀리발꿀🍟
// 요소들을 바꿔주는 함수
const double = (x) => {
  return x * 2;
};
// arr.map(double);
// const newArr = arr.map(double);
// console.log(newArr);

// const add = (x) => x + 10;
// const newArr1 = arr.map(add);
// console.log(newArr1);

// 제곱해서 10보다 작으면 짜장면, 아니면 탕숟육 바까주기

// const food = (x) => (x ** 2 < 10 ? "짜장면" : "탕수육");
// const newArr2 = arr.map(food);
// console.log(newArr2);

// 세제곱하고 자리수가 2자리이하면 커피 아니면 붕빵
// 123[3자리] -> 붕빵
// 23[2자리]->커피
// const food1 = (x) => (x ** 3 < 100 ? "커피" : "붕빵");
// const newArr3 = arr.map(food1);
// console.log(newArr3);
// 과일 문자 길이 슥삭
// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "plum",
//   "persimmon",
//   "fig",
// ];
// 문자 길이가 6글자 이상이면 💙 아니면 💔 바꾸깅
// const tolength = (x) => (x.length < 6 ? "💔" : "💙");
// const newLength = fruits.map(tolength);
// console.log(newLength);

// 문자길이 두배했을때 , 15보다 작으면 과일이름 짧음 아니면 과일이름 김
// const tolength1 = (x) => (x.length * 2 < 15 ? "과일이름 짧음" : "과일이름 김");
// const newLength1 = fruits.map(tolength1);
// console.log(newLength1);

// 💥.some()💥 요소중에 하나라도 있으면 true 없으면 false
const arr1 = [1, 3, 5, 7, 9];

const a = (x) => x == 3;
const three = arr1.some(a);
console.log(three);

const b = (x) => x % 2 == 0;

// every 조건에 맞는지 전체요소가
const fruits = [
  "peach",
  "mango",
  "strawberry",
  "apple",
  "orange",
  "mandarin",
  "plum",
  "persimmon",
  "fig",
];
// 1. 과일 이름중에 k,b,s로 시작하는게 있으면 true 아니면 false
const word = (x) => x.startsWith("k") || x.startsWith("b") || x.startsWith("s");
const word1 = fruits.some(word);
console.log(word1);
// 2. 과일 이름중에 길이가 모두 4~12글자 사이면 true 아니면 false
const tolength = (x) => 4 <= x && x <= 12;
const tolength1 = fruits.every(tolength);
console.log(tolength1);

// 3. 과일 이름중에 i,o,u가 있으면 "💛" 아니면 "💥"
// const hasiou = (alphabet) =>
//   alphabet == "i" || alphabet == "o" || alphabet == "u";

const text = (x) =>
  x.includes("i") || x.includes("o") || x.includes("u") ? "💛" : "💥";
const text1 = fruits.map(text);
console.log(text1);

//
const song = `Ooh
I, I just woke up from a dream
Where you and I had to say goodbye
And I don't know what it all means
But since I survived, I realized
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Ooh
Oh, lost, lost in the words that we scream
I don't even wanna do this anymore
'Cause you already know what you mean to me
And our love's the only war worth fighting for
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Right next to you
Next to you
Right next to you
Oh-oh, oh
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
If the world was ending, I'd wanna be next to you
Ooh`;
//song 배열로 바꾸고, 각각 문자 길이로 바꾼다음 문자길이가 6글자 넘으면 "💛"아니면 그대로 나오고 출력하긔..

const result3 = song
  .split(" ")
  .map((word) => (word.length > 6 ? "💛" : word))
  .join(" ");
console.log(result3);

// filter [] 해당 조건에 true 살려주고 false 라면 죽인다.
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numArr1 = (x) => (x) => 6;
const numArr2 = numArr.filter(numArr1);

// 제곱을 했을 때, 100보다 작으면 살린다음 , +10하기
numArr.filter((x) => x ** 2 < 100).map((x) => x + 10);
