// 노선 종류 정수 , 승객 나이
// 노선별 요금 1.시내버스-1200 2.광역버스-2000 3.마을버스-1000
// 할인 7세 이하 어린이 무료
// 8~19세 청소년 30퍼
// 65세 이상 노인 무료
// 나이와 선택한 노선에 따라 할인 적용한 최종 버스 요금계산 출력

// const bustype = +prompt("노선 뭐타실");
// const age = +prompt("나이");
// if (bustype == 1) {
//   if (age <= 7 || 65 <= age) {
//     alert("무료");
//   } else if (8 <= age && age <= 19) {
//     alert(`비용은 ${1200 * 0.7}임`);
//   } else {
//     alert(`일반${1200}임`);
//   }
// }
// if (bustype == 2) {
//   if (age <= 7 || 65 <= age) {
//     alert("무료");
//   } else if (8 <= age && age <= 19) {
//     alert(`비용은 ${2000 * 0.7}임`);
//   } else {
//     alert(`일반${2000}임`);
//   }
// }
// if (bustype == 3) {
//   if (age <= 7 || 65 <= age) {
//     alert("무료");
//   } else if (8 <= age && age <= 19) {
//     alert(`비용은 ${1000 * 0.7}임`);
//   } else {
//     alert(`일반${1000}임`);
//   }
// }
// //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const bus_data = ["시내버스", "광역버스", "마을버스"];
// const bus_fee = [1200, 2000, 1000];
// if (age <= 7 || 65 <= age) alert("무료입니다!");
// else if (8 <= age && age <= 19)
//   alert(`청소년${bus_data[bustype - 1]}비용은${bus_fee[bustype - 1] * 0.7}`);
// else alert(`${bus_data[bustype - 1]}비용${bus_fee[bustype - 1]}`);

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 영화종류 1~3 나이 ㄱㄱ
// 1 액션 10000원
// 2 로코 8000원
// 3 공포 9000
//13미만 50퍼
//60이상 30퍼
const movie = +prompt("종류ㄱ");
const age = +prompt("나이ㄱ");

const movie_data = ["액션", "로코", "공포"];
const movie_price = [10000, 8000, 9000];
if (age < 13) {
  alert(`영화종류${movie_data[movie - 1]}비용${movie_price[movie - 1] * 0.5}`);
} else if (age >= 65) {
  alert(`영화종류${movie_data[movie - 1]}비용${movie_price[movie - 1] * 0.7}`);
} else {
  alert(`영화종류${movie_data[movie - 1]}비용${movie_price[movie - 1]}`);
}
