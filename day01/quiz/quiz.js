//"당신의 이름, 나이, 좋아하는 색을 입력받아", 제 이름은 [],나이는 [],좋아하는 색은[]입니다!
const name = window.prompt("너의이름은?");
const age = window.prompt("나이는?");
const color = window.prompt("좋아하는 색은?");
console.log(`제 이름은${name},나이는${age},좋아하는 색은${color} 입니다!`);
//오늘의 날짜와 계획하고 있는 일정을 입력받아 , '오늘은[날짜], 계획하신 일정은 [일정]입니다.'
//라고 알려주는 프로그램
const day = window.prompt("날짜");
const todolist = window.prompt("일정");
console.log(`오늘은[${day}], 계획하신 일정은[${todolist}]입니다.`);

//두 개의 숫자를 입력받고 , 두 숫자의 덧셈과 뺼셈을 alert으로 나타내기
const firstNumber = window.prompt("정수를 입력하세요");
const secondNumber = window.prompt("정수를 입력하세요-2");
const add = Number(firstNumber) + Number(secondNumber);
const sub = Number(firstNumber - secondNumber);
window.alert(`두 숫자의 덧셈은${add},두 숫자의 뺄셈은 ${sub} 입니다`);
window.alert(`두숫자의 덧셈은${add}입니다.`);
window.alert(`두숫자의 뺄셈은${sub}입니다.`);
window.alert(`${firstNumber}+${secondNumber}=${add}`);
//prompt로 음식 가격을 입력받고 ,prompt로 몇개를 살지 입력 받은 후 , 총합 가격을 alert로
const price = window.prompt("음식 가격");
const number = window.prompt("구매 갯수");
const totalPrice = Number(price) * Number(number);
window.alert(`총합 가격은${totalPrice}입니다.`);

// prompt로 섭씨 온도를 입력받고, 화씨로 온도를 계산해서 alert으로
// 섭씨에서 화씨로: °F = (°C × 9/5) + 32
const celsius = window.prompt("섭씨 온도는?");
const fahrenheit = Number(celsius) * (9 / 5) + 32;
window.alert(`화씨는${fahrenheit}입니다`);

//prompt로 한변의 길이 입력받고 정사각형 넓이를 계산 alert로 ㄱㄱ
const length = window.prompt("한 변의 길이는?");
const area = Number(length) * Number(length);
window.alert(`정사각형의 넓이는${area}입니다.`);
