let likePizza = true;

const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve('피자를 주문합니다');
  else reject('피자를 주문하지 않습니다.');
});

pizza //
  .then((result) => console.log(resilt))
  .catch((err) => console.log(err));

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success;
    });
  });
}
