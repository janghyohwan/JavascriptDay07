// 1.MBTI 물어보기
// 물어보고 성향 알럿 나타내기
// entj외향적 직관적 이성적 계획적 이시군요!

const mbti = prompt("MBTI 뭐임");
// if (mbti == "entj") {
//   alert("외향적 직관적 이성적 계획적 이시군요");
// } else if (mbti == "istp") {
//   alert("내향적 감각적 이성적 즉흥적 이시군요");
// } else {
//   alert("잘못입력함");
// }

const first = mbti.slice(0, 1);
const second = mbti.slice(1, 2);
const third = mbti.slice(2, 3);
const fourth = mbti.slice(3, 4);

// const first = mbti[0].toUpperCase();
// const second = mbti[1].toUpperCase();
// const third = mbti[2].toUpperCase();
// const fourth = mbti[3].toUpperCase();

const mbtiobj = {
  E: "외향적",
  I: "내향적",
  S: "직관적",
  N: "감각적",
  T: "이성적",
  F: "감각적",
  J: "계획적",
  P: "즉흥적",
};
alert(`${mbtiobj[first]}${mbtiobj[second]}${mbtiobj[third]}${mbtiobj[fourth]}`);

// 2.이메일 입력받고 맞는 이메일인지 확인하기
// @반드시 포함
// .com or .net 포함
// 도메인 naver , kakao, yahoo, paran 포함
// 틀리면 아니 , 맞으면 타당 ㄱㄱ

const email = prompt("이메일 입력");
// if (!email.includes("@")) {
//   alert("@포함하셈ㅡㅡ");
// } else if (!email.includes(".com", ".net")) {
//   alert(".com,.net 포함하셈ㅡㅡ");
// } else if (!email.includes("naver", "kakao", "yahoo", "paran")) {
//   alert("naver,kakao,yahoo,paran 포함하셈");
// } else alert("완성!");

const hasAt = email.includes("@");
const hasDot = email.includes(".com") || email.includes(".net");
const hasDomain =
  email.includes("naver") ||
  email.includes("kakao") ||
  email.includes("yahoo") ||
  email.includes("paran");
hasAt && hasDot && hasDomain ? alert("타당타당") : alert("노타당노타당");
