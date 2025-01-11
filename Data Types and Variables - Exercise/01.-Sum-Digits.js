function sumDigits(arg1) {
  let numStr = String(arg1);
  let sum = 0;
  for (let index = 0; index < numStr.length; index++) {
    let numNum = Number (numStr[index]);
    sum += numNum;
  }
  console.log(sum);
}
sumDigits(111)