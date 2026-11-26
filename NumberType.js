function NumberType(num) {
    let inputNumber = num;
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(NumberType(5));
console.log(NumberType(-3));
console.log(NumberType(0));
