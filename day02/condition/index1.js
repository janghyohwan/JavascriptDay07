// switch 문

const season = prompt("계절뭐임");

switch (season) {
  case "봄":
    alert("봄이니깡 한강물 따뜻하겠지?");
    break;
  case "여름":
    alert("여름에는 한강물이 뜨겁겟지?");
    break;
  case "가을":
    alert("가을이니까 한강 물 차가워질듯?");
    break;
  case "겨울":
    alert("겨울이니까 한강물 얼음물일듯 ");
    break;
  default:
    alert("에러");
    break;
}
