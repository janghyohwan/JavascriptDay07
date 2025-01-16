//프롬프트로 유저 닉네임 물어보기
//알럿으로 ㅇㅇ님 환영함
//만약 빈문자 입력하면 Guest님 환영합니다 나와라

const username = prompt("닉네임 무엇?") || "Guest";
alert(`${username}님 환영합니다.`);

const username1 = prompt("닉네임 무엇?");
alert(`${username1 || "Guest"}님 환영합니다.`);

//프롬프트로 유저에게 화장실 비밀번호를 물어봐서
//1024와 일치하면 알럭으로 화장실 비밀번호 정답 출력
const pass = prompt("화장실비밀번호 무엇");
pass == "1024" && alert("정답!");
