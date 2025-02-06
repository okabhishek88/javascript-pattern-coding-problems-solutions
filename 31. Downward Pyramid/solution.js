for (let row = 5; row >= 1; row--) {
  let str = "";
  for (let space = 1; space <= 5 - row; space++) {
    str += " " + " ";
  }
  for (let col = 1; col <= 2 * row - 1; col++) {
    str += "*" + " ";
  }
  console.log(str);
}
