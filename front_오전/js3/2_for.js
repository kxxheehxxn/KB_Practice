const lists = document.querySelectorAll('.list>li');
console.log(lists[1]);

// for (let i = 0; i < lists.length; i++) {
//   //   lists[i].style.fontSize = '2rem';
//   //   lists[i].style.color = 'tomato';
//   lists[i].style.cssText = 'color:tomato; font-size:2rem';
// }

lists.forEach((li, i) => {
  console.log('li', li);
  console.log('i', i);
  li.style.cssText = 'color:tomato; font-size:2rem';
});
