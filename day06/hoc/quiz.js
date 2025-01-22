const menu = [
  {
    name: "부대찌개",
    price: 13000,
    kacl: 700,
    ingredients: ["햄", "라면", "파", "두부", "김치", "콩"],
  },
  {
    name: "죽",
    price: 4000,
    kacl: 200,
    ingredients: ["소고기", "밥", "물"],
  },
  {
    name: "샌드위치",
    price: 0,
    kacl: 400,
    ingredients: ["고구마", "참치", "빵", "치즈"],
  },
  {
    name: "해장국",
    price: 10000,
    kacl: 700,
    ingredients: ["뼈다귀", "시래기", "감자", "수제비"],
  },
];
// 메뉴에서 가격이 10% 올린 배열을 콘솔로 나타내셈..ㅠ
const menuPrice = (x) => x.price * 1.1;
const menuPrice1 = menu.map(menuPrice);
// console.log(menuPrice1);

// 모든 메뉴에 설탕이 추가됨, 성분에 설탕을 추가하고, kcal + 100 해서  콘솔로 나타내기
const addSugar = (x) => {
  x.kcal = x.kacl + 100;
  x.ingredients.push("설탕");
  return x;
};
const newMenu = menu.map(addSugar);
// console.log(newMenu);

// 난 비건, 성분에 소고기 또는 햄 들어가면 걸러라
const vegan = (x) => x.ingredients.every((y) => y != "햄" && y != "소고기");
const newMenu1 = menu.filter(vegan);
// console.log(newMenu1);

//
const starbucks = [
  {
    name: "카페모카",
    price: 6000,
    shots: 2,
    ingredients: ["커피콩", "물", "초코"],
  },
  {
    name: "레몬에이드",
    price: 4000,
    shots: 0,
    ingredients: ["레몬", "사이드", "시럽"],
  },
  {
    name: "아메리카노",
    price: 3000,
    shots: 2,
    ingredients: ["커피콩", "물"],
  },
  {
    name: "자허블",
    price: 4000,
    shots: 0,
    ingredients: ["자몽", "꿀", "홍차"],
  },
  {
    name: "화이트초코",
    price: 5000,
    shots: 1,
    ingredients: ["크림", "초코", "우유", "얼음"],
  },
];

// 카페인 종류 안마심 . 카페인 없는 음료만 콘솔로 ㄱㄱ
const nonCoffee = (x) => x.shots == 0;
const nonCoffee1 = starbucks.filter(nonCoffee);
// console.log(nonCoffee1);

// 커피 대란임..성분에 커피콩이 들어가면 가격이 20% 할인 들어감 콘솔로 나타내기..
const surplusCoffee = (x) => {
  x.price = x.ingredients.some((x) => x == "커피콩") ? x.price * 0.8 : x.price;
  return x;
};
const newArr2 = starbucks.map(surplusCoffee);

// 성분에 꿀이없으면 (꿀 추가, 이름맨뒤에 꿀❤ 바뀌고, 가격 +300 시킴) 콘솔

const honeyParty = (x) => {
  if (!x.ingredients.includes("꿀")) {
    x.name = x.name + "꿀";
    x.price = x.price + 300;
    x.ingredients.push("꿀");
  }
  return x;
};
const newArr3 = starbucks.map(honeyParty);
console.log(newArr3);

// String -> Array
// const arr = "엄준식".split("");
// const arr1 = [..."엄준식"];

// Array -> String
["김밥", "천국"].join("");
