//  정규표현식 타입 => /문자열/
const a = /hello/i; // i = 대소문자 무시하고 찾아주셍!!
const b = a.test("HELLO world!");
console.log(b); //true

const str = "hello world!";
const result = str.match(a);
console.log(result);
//['hello', index: 0, input: 'hello world!', groups: undefined]

const c = /a{2,4}/;
// aa or aaa or aaaa 있냐?ㅋ
console.log(c.test("a")); // false
console.log(c.test("aa")); // true
console.log(c.test("aaa")); // true
console.log(c.test("aaaa")); // true
console.log(c.test("aaaaa")); // true
