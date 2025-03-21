// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

let posts;


async function getPosts() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts'); //비동가힘수 fetch
    console.log(response);
    let posts = await response.json();
    console.log(posts.length);
  } catch (e) {
    console.log(e);
  } finally {
    console.log('end');
  }
}

getPosts();
