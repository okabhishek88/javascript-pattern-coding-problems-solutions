for (let row = 5; row >= 1; row--) {
  let str = "";
  for (let space = 1; space <= 5 - row; space++) {
    str += " " + " ";
  }
  if (row === 4 || row === 3) {
    for (let col = 1; col <= row; col++) {
      if (col === 1 || col === row) {
        str += "*" + " ";
      } else {
        str += " " + " ";
      }
    }
  } else {
    for (let col = 1; col <= row; col++) {
      str += "*" + " ";
    }
  }
  console.log(str);
}
