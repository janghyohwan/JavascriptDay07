const toUpper = (word) => {
  return word.toUpperCase(); // 대문자 자동완성 안되는이유가 word 에 문자가 올것이란 확신이없음
};

// cook
//콘솔 요리시작
// 1 된장국요리
// 2 김치찌개요리
// 3 짜파게티요리
// 4 가자미 튀김
// 5 비엔나소세지
// 6 라면
//콘솔 요리끝

const cook = (num) => {
  console.log("요리시작");
  if (num == 1) console.log("된찌");
  else if (num == 2) console.log("김찌");
  else if (num == 3) console.log("짜파");
  else if (num == 4) console.log("가자");
  else if (num == 5) console.log("비소");
  else if (num == 6) console.log("라면");
  else console.log("없음");
  console.log("끝");
};
cook(1);
cook(2);
cook(3);
cook(4);
cook(5);
cook(6);

// 1불 2얼음 3번개
const skill = (magic) => {
  console.log("스킬준비");
  magic();
  console.log("스킬완료");
};
const fire = () => {
  console.log("불~");
};
const ice = () => {
  console.log("얼음~");
};
const stome = () => {
  console.log("번개~");
};
