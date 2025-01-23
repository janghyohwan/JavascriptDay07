// 콘솔로 로또번호 나타내긔 ㄱ
// ex) [1,5,7,23,35,45]
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const lotto = new Array(6).fill(0).map((v) => getRandom(1, 45)); // 1 <= x < 46
// console.log(lotto);
// while 사용해서 로또 만들기
const getLotto = () => {
  while (true) {
    const lotto = Array(6)
      .fill(1)
      .map((v) => String(getRandom(1, 45)));

    const newLotto = lotto
      .reduce((a, c) => {
        if (a.includes(c)) return a;
        else return a + "," + c;
      })
      .split(",");
    if (newLotto.length == 6) return newLotto;
  }
};

const getLotto1 = () => {
  while (true) {
    const lotto = [
      ...new Set(
        Array(6)
          .fill(1)
          .map((v) => String(getRandom(1, 45)))
      ),
    ];
    if (lotto.length == 6) return lotto;
  }
};
