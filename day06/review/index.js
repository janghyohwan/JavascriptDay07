// 화살표 함수 구현하기
// 1. 음식 이모지 넣으면 음식이모지 피자 나오는 함수
// ex) 🍔->🍔피자
const food = (x) => {
  return `${x}피자`;
};
food("🍟");
console.log(food("🍟"));
// 2. 영단어를 넣으면 그 영단어를 3배 곱해서 돌려주는 함수
// ex) kim -> kimkimkim
const word = (y) => {
  return y * 3;
};

// 3. 원화를 넣으면 달러를 돌려주는 함수
const won = (z) => {
  return `${z * 0.0007}달러 입니다`;
};

// gotoAcademy 함수
// 시작 콘솔로 집에서 출발
// 택시, 버스, 걷기, 자전거, 차
// 끝 콘솔로 학원 도착

const gotoAcademy = (transport) => {
  console.log("출발");
  transport();
  console.log("도착");
};
const taxi = () => {
  console.log("택시");
};
const bus = () => {
  console.log("버스");
};
const car = () => {
  console.log("차");
};
const bicycle = () => {
  console.log("자전거");
};

gotoAcademy(taxi);

// makeBeverage
// 커피 만들기 => {1.원두갈기 2.탬핑 3.커피기계넣기 4. 버튼클릭 5. 추출}
// 스무디 만들기 => {1. 재료넣기 2. 얼음넣기 3. 갈기 }
// 차 만들기 => {1. 티백넣기 2. 뜨물넣기 3. 후~불기}
// 시작 콘솔 주문받기
// 종료 콘솔 주문완료

const makeBeverage = (cafeMenu) => {
  console.log("주문받기");
  cafeMenu();
  console.log("주문완료");
};
const coffee = () => {
  console.log("1.원두갈갈");
  console.log("2.탬핑");
  console.log("3.커피기계넣기");
  console.log("4.추출버튼");
  console.log("5.추출");
};
const smoothie = () => {
  console.log("1.재료넣기");
  console.log("2.얼음");
  console.log("3.갈기");
};
const tea = () => {
  console.log("1.티백");
  console.log("2.뜨물");
  console.log("3.후~불기");
};
makeBeverage(coffee);
