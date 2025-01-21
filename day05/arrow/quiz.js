// add 함수
const add = function (x, y) {
  return x + y;
};

// minus 함수
function minus(x, y) {
  return x - y;
}

// hello 함수 : 이름이 들어오면 ~~님 안녕 돌려주기
function hello(x) {
  return `${x}님 안녕`;
}

// tolength 함수 : 문자가 들어오면 "~~문자: 문자의 길이"
// ex) tolenggth("happy") -> "happy문자 : 5"

// function tolength(word) {
//   return `${word}문자: ${word.lenght}`;
// }

// square_three: x가 들어오면 제곱의 세배 돌려줌
// lunch_menu : x가 들어오면 점심메뉴 :~~ 입니다. 돌려줌
// allergy_test : 어떠한 긴 글이 들어오고 거기에 새우, 땅콩, 조개, 단어가 포함되면
// 알러지 있음 ㄱㄱ 아니면 없음 ㄱㄱ

function square_three(x) {
  return x ** 2 * 3;
}
function lunch_menu(x) {
  return `점심메뉴:${x}입니다`;
}
function allergy_test(x) {
  const hasShrimp = x.includes("새우");
  const hasPeanut = x.includes("땅콩");
  const hasShell = x.includes("조개");
  return hasShrimp || hasPeanut || hasShell ? "알러지있" : "알러지 없";
}

// threeToArray 세개의 단어를 넣으면 배열로 돌려주는 함수
// 고기, 야채 ,스프-> [고기,야채,스프]
function threeToArray(a, b, c) {
  return [a, b, c];
}

// getIphone version, model, storage
// 13, plus, 256 -> {version:13 , model:plus , storage:256}
function getIphone(a, b, c) {
  return { version: a, model: b, storage: c };
}

// 각도(0~180)
// 몇도를 넣으면 -> 평 직 둔 예각 돌려주는 함수
function angle(x) {
  if (0 < x && x < 90) {
    return "예각";
  } else if (90 < x && x < 180) {
    return "둔각";
  } else if (x == 90) {
    return "직각";
  } else if (x == 180 || x == 0) {
    return "평각";
  } else {
    return "보기에없다";
  }
}

// 어떠한 단어를 입력하고, 하나의 알파벳도 입력하면
// 그 알파벳 기준으로 앞 뒤로 쪼개서 앞의 단어를 대문자로 돌려줌
// icecream, r=> ICEC     americano, i => AMER

function word(x, y) {
  const [first] = x.split(y);
  return first.toUpperCase();
}

// 단어를 입력하면 길이가 4~10 사이면 길이가 적당 ㄱㄱ
// 아니면 유효허자얺움

function tolength(x) {
  if (4 <= x.length && x.length <= 10) {
    return "적당";
  } else {
    return "노적당";
  }
}
