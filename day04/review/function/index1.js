// 함수
// 자바스크립트에서는 함수를 입급 객체로 취급함
// array, object, function
const a = [];
const b = {};
const c = function (a, b) {
  return a + b;
};
const d = c(1, 2); // 3

// const subway = {
//   name: "부평점 서브웨이",
//   sale: 0,
//   sellBread: function () {
//     this.sale = this.sale + 1000; // this = subway 자신
//   },
//   printSale: function () {
//     console.log(this.sale);
//   },
// };

// subway.sellBread();
// subway.sellBread();
// subway.sellBread();
// subway.printSale();

// baskinRabbins 오브젝트 타입
// icecream : ["민초","엄외","지헌이맏형"]
// sale : 0
// sellIcecream : 민초 2000, 엄외 2500, 지헌맏형 4000
// printSale : 매출보여주는 햄수

// const baskinRabbins = {
//   name: "베스킨라빈스",
//   menu: ["민초", "엄외", "지맏"],
//   sale: function () {
//     if (this.menu[0]) {
//       this.sale + 2000;
//     } else if (this.menu[1]) {
//       this.sale + 2500;
//     } else if (this.menu[2]) {
//       this.sale + 4000;
//     }
//   },
// };

const baskinRabbins1 = {
  icecreams: [
    { name: "민초", price: 2000 },
    { name: "엄외", price: 2500 },
    { name: "지맏", price: 4000 },
  ],
  sale: 0,
  sellIcecream: function (num) {
    if (this.icecreams[num] == undefined) console.log("그런 번호 없음");
    else {
      console.log(`${this.icecreams[num].name}아이스크림이 판매되었음`);
      this.sale = this.sale + this.icecreams[num].price;
    }
  },
  printSale: function () {
    console.log(`현재 매출 : ${this.sale}`);
  },
  addIcecream: function (name, price) {
    this.icecreams.push({ name: name, price: price });
  },
};

baskinRabbins1.sellIcecream(0);
baskinRabbins1.sellIcecream(1);
baskinRabbins1.sellIcecream(2);
baskinRabbins1.printSale();
