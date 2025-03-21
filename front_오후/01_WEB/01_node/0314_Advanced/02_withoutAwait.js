const user = fetch('https://jsonplaceholder.typicode.com/users');

user
  .then((message) => {
    console.log(message);
  })
  .catch((e) => {
    console.log(e.massage);
  });
