// 누적시킴(쌓기)
const result = [1, 2, 3, 4, 5].reduce((acc, current) => {
  console.log({ acc, current });
  return acc + current;
}); //1+2=>1+2--3+3 => 3+3 -- 6+4 => 6+4 -- 10+5 => 10+5

const coffee = "americano".split("a").reduce((a, c) => a + c);
