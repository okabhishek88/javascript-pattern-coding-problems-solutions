for (let row = 5; row >= 1; row--) {
  let str = "";
  for (let space = 1; space <= 5 - row; space++) {
    str += " ";
  }
  if (row === 1 || row === 5) {
    for (let col = 1; col <= 2 * row - 1; col++) {
      str += "*";
    }
  } else {
    for (let col = 1; col <= 2 * row - 1; col++) {
      if (col === 1 || col === row) {
        str += "*" + " ";
      } else {
        str += " " + " ";
      }
    }
  }
  console.log(str);
}
