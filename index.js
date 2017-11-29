function getFriendlyNumbers(start, end) {
  let i = start;
  let divisorsSum = 0;
  let prevDivisorsSum = 0;
  let resultArr = [];
  let iter = 0;

  if ((end < start) ||
      (typeof start !== 'number' ) ||
      (typeof end !== 'number' )) {
    resultArr = false;
  }

  while (i <= end) {

    if ((start <= -1) || (end <= -1)) {
      resultArr = false;
      break;
    }

    for (let x = 0; x < i; x++) {
      if ((i % x) === 0) {
        prevDivisorsSum += x;
      }
    }

    for (let y = 0; y < prevDivisorsSum; y++) {
      if ((prevDivisorsSum % y) === 0){
          divisorsSum += y;
      }
    }

    if (divisorsSum !== prevDivisorsSum && divisorsSum === i && divisorsSum > prevDivisorsSum) {
      resultArr[iter] = [prevDivisorsSum, divisorsSum];
      if (start === divisorsSum) {
        resultArr.length = 0;
      }
      iter++;
    }

    prevDivisorsSum = 0;
    divisorsSum = 0;
    i++;
  }
  return resultArr;

}


module.exports = {
    firstName: 'Kyrylo',
    secondName: 'Shtokolov',
    task: getFriendlyNumbers
};
