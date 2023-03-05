function miniMaxSum(arr) {
  // Write your code here
  let minSum = 0, maxSum = 0, sumValue = 0;
  let aMinMaxSum = [];

  for (let i = 0; i < arr.length; i++) {
    aMinMaxSum = arr.filter((value, ind) => ind != i);
    sumValue = aMinMaxSum.reduce((prev, next) => prev + next);

    if (minSum === 0 && maxSum === 0) {
      maxSum = sumValue
      minSum = sumValue
    }

    if (sumValue > maxSum) {
      maxSum = sumValue
    } else if (sumValue < minSum) {
      minSum = sumValue
    }
  }
  console.log(minSum + ' ' + maxSum)
}

// let array = [140638725, 436257910, 953274816, 734065819, 362748590]
let array = [1, 2, 3, 4, 5]

miniMaxSum(array)

// console.log(140638725 + 436257910 + 953274816+ 734065819)