function order(food) {
  const promise = new Promise((resolve, reject) => {
    const result = `${food}를 주문했습니다.`;
    if (food !== '피자') {
      const e = new Error(`${food}를 주문하지 않습니다.`);
      return reject(e);
    }
    resolve(result);
  });
  return promise;
}

order('피자')
  .then((message) => {
    console.log(message);
  })
  .catch((e) => {
    console.log(e.message);
  });
