for (let row = 1; row <= 5; row++) {
  let str = "";
  for (let space = 1; space <= 5 - row; space++) {
    str += " ";
  }
  if (row === 1 || row === 5) {
    for (let col = 1; col <= row; col++) {
      str += "*" + " ";
    }
  } else {
    for (let col = 1; col <= row; col++) {
      if (col === 1 || col === row) {
        str += "*" + " ";
      } else {
        str += " " + " ";
      }
    }
  }
  console.log(str);
}
