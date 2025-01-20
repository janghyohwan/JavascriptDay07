// function[함수]
// 입력 : (x)
// 출력 : x + 100;

function plus100(x) {
  return x + 100;
}

// pluss100 [함수 이름]
const a = plus100(200);
console.log(a); // 300

// twice
// x 가 들어오면 두배를 돌려주는 함수 만들고
// 실행 ㄱ 콘솔
function twice(x) {
  return x * 2;
}
const b = twice(200);
console.log(b);

// luckybiky 함수
// 문구 넣으면 마지막에 러키비키잖아😁 붙혀서 돌려주는 함수 만들고 실행 콘솔
function luckybiky(x) {
  return x + "러키비키잖아😁";
}
const c = luckybiky("런치");
console.log(c);

// 홀수 짝수 판별 함수
// 반환값 : 홀수 or 짝수
function luckyDrow(x) {
  return x % 2 ? "홀수" : "짝수";
}
const d = luckyDrow(5);
console.log(d);
