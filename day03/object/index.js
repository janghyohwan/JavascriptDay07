const coffee = {
  name: "아메리카노",
  price: 2500,
  ingredients: ["물", "커피콩", "얼음"],
};

// .(dot) 연산자
console.log(coffee.price);
console.log(coffee["price"]);

// 커피콩 꺼내기
console.log(coffee.ingredients[1]);
console.log(coffee["ingredients"][1]);

const dplus = {
  top: {
    playerName: "siwoo",
    champion: "Sion",
    kda: {
      kill: 1,
      death: 3,
      assist: 10,
    },
  },
  // middle - 선수 :showmaker, 챔피언:ahri, kda:927
  middle: {
    playerName: "showmaker",
    champion: "ahri",
    kda: {
      kill: 9,
      death: 2,
      assist: 7,
    },
  },
};
//콘솔로 탑 미드 총 킬 나타내기
console.log(dplus.top.kda.kill + dplus.middle.kda.kill);

const lunch = {
  name: "햄버거",
  franchise: "버거킹",
};

// 오브젝트 데이터 추가
lunch.kcal = 900;
lunch.side = "감튀";
lunch.drink = "콜라";

// 오브젝트 삭제
delete lunch.name;

//
const drama = {
  title: "오징어게임2",
  grade: 18,
  genres: ["액션", "블랙 코미디", "군상극", "데스 게임"],
};

const a = drama.title; //오징어게임2
const { title } = drama; //오징어게임2

const b = drama.genres[1];
const { genres } = drama;
const [action, black] = genres;

const menu = ["아메리카노", "라테", "민트"];
const a1 = menu[0];
const [a2] = menu;

const player = {
  name: "이승엽",
  position: ["타자"],
  salary: 30000,
};
const coffee1 = {
  coffeeName: "아메리카노",
  proce: 2500,
};

// key - value 이름이 같으면 생략 가능
const data = { player, coffee1: coffee1 };
console.log(data);

const data1 = { ...player, ...coffee1 };
console.log(data1);

const cosmetic = {
  type: "핸드크림",
  company: "카밀",
  price: 8000,
  ingredients: {
    first: {
      name: "글리세리",
      chemicals: ["수소", "산소"],
    },
    second: {
      name: "미네랄오일",
      chemicals: ["알케인", "파라핀"],
    },
  },
};
//카밀 변수
const { company } = cosmetic;
//첫번째 성분 빼기
const { first } = cosmetic.ingredients;
console.log(first);
//첫번째 성분
const test1 = { ...cosmetic.ingredients.first };
console.log(test1);

const laptop = {
  title: "그램",
  price: 800000,
  specs: {
    cpu: "Intel i5",
    ram: "8GB",
    storage: "256GB SSD",
  },
};

const cpu = laptop.specs.cpu;
const ram = laptop.specs.ram;
const storage = laptop.specs.storage;

console.log(cpu);
console.log(ram);
console.log(storage);
