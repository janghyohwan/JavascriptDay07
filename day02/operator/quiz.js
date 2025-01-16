//1. 놀이동산에~ 놀러갔을때, prompt 손님의 키를 묻고
// 키가 140 이하면 탑승금지 알럿이나오고 아니면 탑승가능 알럿이 나와야함
const height = prompt("키몇?");
const play = Number(height) > 140 ? "탑승가능" : "탑승금지";
window.alert(`${play}`);

//2. 숫자를 prompt로 입력했을 때, 짝수인지 홀수인지 알럿으로 ㄱㄱ
const number = prompt("숫자입력ㄱ");
window.alert(Number(number) % 2 == 1 ? "홀수" : "짝수");

//3. 태어난 년도를 입력하고, 20상 이상이면 성인입니다. 아니면 미성년자 입니다. 알럿ㄱㄱ
const year = prompt("몇년생임?");
alert(2026 - Number(year) >= 20 ? "성인" : "미성년자");

//4. 시 분 초 입력해서 초로 나타내긔
const hour = prompt("시간 입력ㄱㄱ");
const minutes = prompt("분 입력ㄱㄱ");
const sec = prompt("초 입력ㄱㄱ");
alert(Number(hour) * 3600 + Number(minutes) * 60 + Number(sec));

//5. 두 숫자르르 입력하고 더 큰 숫자를 알럿으로 ㄱㄱ
const first = prompt("첫번째 숫자");
const second = prompt("두번째 숫자");
alert(Number(first) > Number(second) ? first : second);
