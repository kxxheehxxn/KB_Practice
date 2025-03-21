//06_callback-1.js

const order = (o, callback) => {
  console.log(`${o} 주문 접수`);
  setTimeout(() => {
    console.log(`${o} 완료!`);
  });
};
const display = (result) => {
  console.log(`${result} 완료!`);
};
order('아메리카노', display);
