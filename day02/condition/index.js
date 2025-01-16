// const username = prompt("이름뭐고");
// if (username == "엄준식") {
//   alert("살아있따");
// }

// 0보다 큰 숫자를 넣으면 알럿으로 양의 정수 입니다. 출력~
// const number = prompt("숫자 ㄱㄱ");
// if (Number(number) > 0) {
//   alert("양의정수입니두");
// } else {
//   alert("음의 정수 입니다잉");
// }

//어떤 정수를 입력해서 홀수 또는 짝수 알려주는 프로그램
// const num = Number(prompt("숫자 ㄱㄱ 홀 짝 알려줌"));
// if (num % 2 == 0) {
//   alert("짝수");
// } else {
//   alert("홀수");
// }

// const num = +prompt("정수 ㄱㄱ");
// if (num > 0) {
//   alert("양의정수");
// } else if (num == 0) {
//   alert("0임당");
// } else {
//   alert("음의 정수");
// }

// 정수를 입력받아, 양의홀수 ,양의 짝수 ,0 , 음의 홀수 , 음의 짝수 ㄱㄱ
// const num = +prompt("숫자입력 ㄱㄱ");
// if (num > 0 && num % 2 == 0) {
//   alert("양의짝수");
// } else if (num > 0 && num % 2 == 1) {
//   alert("양의홀수");
// } else if (num < 0 && num % 2 == 0) {
//   alert("음의짝수");
// } else if (num < 0 && num % 2 == -1) {
//   alert("음의홀수");
// } else if (num == 0) {
//   alert("0임ㅡㅡ");
// } else {
//   alert("에ㅔ에에에에에엥러!");
// }

// 몇년생임? 알럿으로 띠 ㄱㄱ
const year = +prompt("년생");
if (year % 12 == 1) {
  alert("닭띠");
} else if (year % 12 == 2) {
  alert("개띠");
} else if (year % 12 == 3) {
  alert("돼지");
} else if (year % 12 == 4) {
  alert("쥐띠");
} else if (year % 12 == 5) {
  alert("소띠");
} else if (year % 12 == 6) {
  alert("호랭이띠");
} else if (year % 12 == 7) {
  alert("토끼띠");
} else if (year % 12 == 8) {
  alert("용띠");
} else if (year % 12 == 9) {
  alert("뱀띠");
} else if (year % 12 == 10) {
  alert("말띠");
} else if (year % 12 == 11) {
  alert("양띠");
} else {
  alert("원숭이띠");
}
