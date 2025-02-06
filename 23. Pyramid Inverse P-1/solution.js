for (let row = 1; row <= 13; row++) {
  let str = "";
  if (row <= 7) {
    for (let space = 1; space <= 7 - row; space++) {
      str += " ";
    }
    for (let col = 1; col <= row; col++) {
      str += "*" + " ";
    }
  } else {
    for (let space = 1; space <= row - 7; space++) {
      str += " ";
    }
    for (let col = 13; col >= row; col--) {
      str += "*" + " ";
    }
  }
  console.log(str);
}
