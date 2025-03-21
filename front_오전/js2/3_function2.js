function add(a = 0, b = 0, ...nums) {
  console.log(a);
  console.log(b);
  console.log(nums);
}

add(4, 1, 3, 3, 2);

const add3 = (a, b) => a + b;
const multiply = (a, b) => a * b;

const calculator = (a, b, callback) => {
  if (a < 0 || b < 0) {
    return;
  }
  let result = callback(a, b);
  console.log(result);
};

calculator(3, 4, add3);
calculator(-3, 4, multiply);
