// 아아 콜드브루 라테
// const a = "아아";
// const b = "콜드브루";
// const c = "라테";

const menu = ["아아", "콜드브루", "라테"]; //array타입
// console.log(menu[1]);

// const test = [100, false, "아아", ["배열안배열", 123, true]];
// console.log(test);

// const soccer1 = new Array(5);
// console.log(soccer);

const soccer = ["흥민", "희찬", "강인", "민재"];

// 배열 관련된 연산자
// 1. indexing 연산자 (=꺼내기)
const test = [menu, soccer];
// 희찬 ㄱ
console.log(test[1][1]); // 희찬
// 라테 ㄱ
console.log(test[0][2]); // 라테

// 2. Destructuring 연산자 (=분해)
const test1 = [...menu, ...soccer];
console.log(test1);

// 3. Rest 연산자
const [son, ...rest] = soccer; //["흥민", "희찬", "강인", "민재"]
console.log(son);
console.log(rest);

const [son1, rest1] = soccer;
console.log(son1); // 흥민
console.log(rest1); // 희찬

// 4. add 및 update 연산자
soccer[4] = "지성";
soccer[1] = "황희찬";
console.log(soccer);

// 5. delete 연산자 (=삭제)
delete soccer[3];
console.log(soccer);
