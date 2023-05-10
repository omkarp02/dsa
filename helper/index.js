function swap(arr, num1, num2) {
  let temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
}

module.exports = {
  swap,
};
