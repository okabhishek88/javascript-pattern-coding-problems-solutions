for (let row = 7; row >= 1; row--) {
  let str = "";
  for (let space = 1; space <= 7 - row; space++) {
    str += " ";
  }
  for (let col = 1; col <= row; col++) {
    str += "*" + " ";
  }
  console.log(str);
}
