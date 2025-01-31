// 메뉴 : 아아 4000 ,라테 4500 , 유자차 4000
// 매출 : 0
// 판매기능 : 번호를 물어보고 판매 되면 매출리 올라가면 됨
// 메뉴추가 : 이름과 가격이 주어지면 메뉴에 추가됨

// const starbucks = {
//   menu: [
//     { name: iceamericano, price: 4000 },
//     { name: latte, price: 4500 },
//     { name: tea, price: 40400 },
//   ],
//   sale: 0,
//   sellmenu: function (num) {
//     if(!menu[num]) console.log("그런메뉴 없뜸");

//     else {console.log(`${this.menu[num].name}이 팔림`)
//     this.sale = this.sale + this.menu[num].price;}
//   },
//   add function(a,b){
//     console.log(`${a}메뉴가 추가되었음`);

//   }
// };

// 렙 1
// 체력 100 마나 100
// 경험치 0 경험치 100되면 레벨 업 경험치 0
// 매직클로 : 마나 -10, 매직클로 발동 [1번 경험치 10오름]단, 마나가 충분할때
// 텔레포트 : 마나 -50, 텔레포트 발동 [2번 경험치 50 오름]단, 마나가 충분할때
// 포션 마시기 : 체력, 마나 50 충전

// const magician = {
//   level: 1,
//   exp: 0,
//   hp: 100,
//   mana: 100,
//   getExp: function (exp) {
//     this.exp = this.exp + exp;
//     if (this.exp >= 100) {
//       this.level = this.level + 1;
//       this.exp = this.exp - 100;
//     }
//     console.log(`레벨업${this.level}`);
//   },
//   magicClaw: function () {
//     if (this.mana < 10) {
//       console.log(`현재마나:${this.mana}이므로 마나가 부족`);
//     } else {
//       this.mana = this.mana - 10;
//       this.getExp(10);
//       console.log("매직클로");
//     }
//   },
//   telePort: function () {
//     if (this.mana < 10) {
//       console.log(`현재마나:${this.mana}이므로 마나가 부족`);
//     } else {
//       this.mana = this.mana - 50;
//       this.getExp(50);
//       console.log("텔포");
//     }
//   },
//   dringPotion: function () {
//     this.hp = this.hp + 50;
//     this, (mana = this.mana + 50);
//     console.log(`포션 ㄱㄱ`);
//   },
// };

// youtube

// 내아이디
// 구독한 채널
// 좋아요 눌렀던 채널
// 구독하기
// 좋아요 누르기

// const youtube = {
//   subscribeChannels: ["슈카", "타요", "g무비"],
//   likedChannels: ["슈카", "ytn"],
//   subscribe: function (newChannel) {
//     this.subscribeChannels.push(newChannel);
//   },
//   like: function (likedChannels) {
//     this.subscribeChannels.push(newChannel);
//   },
// };

// car옵젝
// 차 이름
// 차 속도
// 차 속도 올리기
// 차 속도 내리기
// 차 브레이크 밟기
// 차 현재 속도 나타내기

// const carObject = {
//   carname: ["k5", "k3", "k7"],
//   speed: 0,
//   speedUp: function () {
//     this.speed = this.speed + 1;
//     console.log(`현재차량속도는${this.speed}`);
//   },
//   speedDown: function () {
//     if (this.speed == 0) {
//       console.log(`차량이 멈췄습니당`);
//     } else {
//       this.speed = this.speed - 1;
//       console.log(`현채자량속도는${this.speed}`);
//     }
//   },
// };
// carObject.speedUp();
// carObject.speedUp();
// carObject.speedUp();
// carObject.speedDown();
// carObject.speedDown();
// carObject.speedDown();

// result : 0
//history : 계산의 모든 결과를 가지고 있음
// add 함수 있쑴 - result + x
// minus 함수 있음 - result -x
// multiply 함수 있음 - result * x
// divide 함수 [단 0 들어오면 에러]
// square(제곱) 함수있음 result**2
// clear 함수 - result 0으로 초기화
// showHistory 함수 있음 - history 결과 보여줌
//현균이 함수 - 뭐이렇게 많아 alert 로 보여줌

calculator = {
  history: [],
  result: 0,
  add: function (x) {
    this.result = this.result + x;
    this.history.push(this.result);
    console.log(`${this.result}`);
  },
  minus: function (x) {
    this.result = this.result - x;
    this.history.push(this.result);
    console.log(`${this.result}`);
  },
  multiply: function (x) {
    this.result = this.result * x;
    this.history.push(this.result);
    console.log(`${this.result}`);
  },
  divide: function (x) {
    if (x == 0) {
      console.log(`에러~`);
    } else {
      this.result = this.result / x;
      this.history.push(this.result);
      console.log(`${this.result}`);
    }
  },
  square: function (x) {
    this.result = this.result ** x;
    this.history.push(this.result);
    console.log(`${this.result}`);
  },
  clear: function (x) {
    this.result = 0;
    console.log(`${this.result}`);
  },
  showHistory: function () {
    console.log(history);
  },
};

calculator.add(2);
calculator.minus(3);
calculator.multiply(2);
calculator.divide(0);
calculator.square(2);
