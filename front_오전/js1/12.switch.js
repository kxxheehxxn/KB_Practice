//switch 문법

let today = new Date();
let dayName = today.getDay();
console.clear();
console.log(today);
// console.log(today.getDate());
// console.log(dayName);

if (dayName === 0) {
  dayName = '일요일';
  console.log(dayName);
} else if (dayName === 1) {
  dayName = '월요일';
  console.log(dayName);
} else if (dayName === 2) {
  dayName = '화요일';
  console.log(dayName);
}

switch (dayName) {
  case 0:
    dayName = '일요일';
    break;
  case 1:
    dayName = '월요일';
    break;
  case 2:
    dayName = '화요일';
    break;
  case 3:
    dayName = '수요일';
    break;
  case 4:
    dayName = '목요일';
    break;
  case 5:
    dayName = '금요일';
    break;
  case 6:
    dayName = '토요일';
    break;
  default:
    dayName = '요일을 알 수 없습니다.';
    break;
}
