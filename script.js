const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  let result = [];
  let temp = [];
  let j = 0,
    sum = 0;
  while (j < arr.length) {
    if (sum + arr[j] <= n) {
      sum += arr[j];
      temp.push(arr[j]);
    } else {
      sum = arr[j];
      result.push(temp);
      temp = [arr[j]];
    }
    ++j;
  }
  result.push(temp);
  return result;
};


const n = parseInt(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n))); 
