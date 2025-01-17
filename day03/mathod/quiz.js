//만들고싶은 id 뭐임
// 길이는 4~16 사이 (lenght 아니면 else)
// 틀리면 : 아이디 길이가 유효하지 않음나오고

// !,@,#,$ 중 특수문자 하나 ㄱㄱ무조건 ( includes(!@#$) 없으면 else)
// 틀리면 : 반드시 특수문자 !,@,#,$ 포함 ㄱㄱ

// 마지막 글자가 알파벳 대문자로 끝나야함 ( toLowercase()가 아니면 else )
// 틀리면 : 마지막 알파벳은 무조건 대문자 ㄱㄱ임

// 위 조건을 모두 통과하면 아이디 완성! 알럿 나오기
const user_id = prompt("id 입력하셈");
const user_length = user_id.length;
const user_slice = user_id.slice([length - 1], [length]);

if (4 <= user_length && user_length <= 16) {
  if (user_id.includes("!", "@", "#", "$")) {
    if (user_id.slice([user_length - 1], [user_length])) {
      if (user_slice && user_slice.toLowerCase()) {
      } else {
        alert("마지막대문자ㄱㄱ");
      }
    }
  } else {
    alert("특수문자 ㄱㄱ");
  }
} else {
  alert("길이ㄴㄴ");
}
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const userId = prompt("아이디입력ㄱㄱㄱ");

if (userId.length < 4 || 16 < userId.length) alert("아이디 길이 유효하지않다");
else if (
  !userId.includes("!") ||
  !userId.includes("@") ||
  !userId.includes("#") ||
  !userId.includes("$")
)
  alert("특수문자 ㄱㄱ");
else if (
  userId.slice(userId.length - 1, userId.length) !=
  userId.slice(userId.length - 1, userId.length).toUpperCase()
)
  alert("마지막 알파벳 대문자 ㄱㄱ");
else alert("완성...");
