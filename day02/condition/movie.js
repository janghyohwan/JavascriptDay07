//종류 1~3
// 나이
// 영화가격은 1.10000원 2.8000원 3. 9000원
// 나이에 따른 할인율
// 13세 미만 :50% 할인
// 60세이상 30%할인
//나이와 선택한 영화에 따라 할인을 적용한 최종 티켁 가격 계산

const movie = +prompt("종류 1~3 골라");
const age = +prompt("나이 ");
const price1 = 10000;
const price2 = 8000;
const price3 = 9000;
const discountYoung = 1 / 2;
const discountOld = 1 / 3;
if (movie == 1 && age < 13) {
  alert(`${price1 * discountYoung}`);
} else if (movie == 1 && age >= 60) {
  alert(`${price1 * discountOld}`);
} else if (movie == 1 && 13 <= age < 60) {
  alert(`${price1}`);
}
//
else if (movie == 2 && age < 13) {
  alert(`${price2 * discountYoung}`);
} else if (movie == 2 && age >= 60) {
  alert(`${price2 * discountOld}`);
} else if (movie == 2 && 13 <= age < 60) {
  alert(`${price2}`);
}
//
else if (movie == 3 && age < 13) {
  alert(`${price3 * discountYoung}`);
} else if (movie == 3 && age >= 60) {
  alert(`${price3 * discountOld}`);
} else if (movie == 3 && 13 <= age < 60) {
  alert(`${price3}`);
}
//
else {
  alert("다시입력하셈ㅡㅡ");
}
