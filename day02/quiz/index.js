// 1번
const food = window.prompt("좋아하는 음식은?");
const place = window.prompt("가장 최근에 갔던 장소는?");
window.alert(`가장좋아하는음식은 ${food}, 가장최근에 갔던 장소는 ${place}`);
console.log(`가장좋아하는음식은 ${food}, 가장최근에 갔던 장소는 ${place}`);

// 2번 BMI = 체중(kg) / 신장(m)²
const height = window.prompt("키는?");
const weight = window.prompt("몸무게는?");
const total = (Number(weight) / Number(height)) * (Number(height) / 100);
window.alert(`나의 BMI지수는 ${total} 입니다.`);
console.log(`나의 BMI지수는 ${total} 입니다.`);
// 3번
const change = window.prompt("1USD = 몇원임?");
const money = window.prompt("얼마(USD)를 원으로 환전하실?");
const changeMoney = Number(money) * Number(change);
window.alert(`${changeMoney}원 입니다.`);
console.log(`${changeMoney}원 입니다.`);
// 4번
const btc_rate = prompt("1비트당 시세?");
const btc = prompt("몇 btc 환산할꺼??");
const result = Number(btc_rate) * Number(btc);
window.alert(result);
console.log(result);
