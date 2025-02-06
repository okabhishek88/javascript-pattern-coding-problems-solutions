for (let row = 1; row <= 5; row++) {
  let str = "";
  for (let space = 1; space <= 5 - row; space++) {
    str += " ";
  }
  for (let col = 1; col <= row * 2 - 1; col++) {
    if (col === 1 || col === row) {
      str += "*" + " ";
    } else {
      str += " " + " ";
    }
  }
  console.log(str);
}
for (let row = 4; row >= 1; row--) {
  let str = "";
  for (let space = 1; space <= 4 - row + 1; space++) {
    str +=  " ";
  }
  for (let col = 1; col <= row; col++) {
    if (col === 1 || col === row) {
      str +="*" + " ";
    } else {
      str += " " + " ";
    }
  }
  console.log(str);
}
