for (let row = 1; row <= 5; row++) {
  let str = "";
  if (row === 1 || row === 2 || row === 5) {
    for (let col = 1; col <= row; col++) {
      str += "*" + " ";
    }
  } else {
    for (let col = 1; col <= row; col++) {
      if (col != 1 && col != row) {
        str += " " + " ";
      } else {
        str += "*" + " ";
      }
    }
  }
  console.log(str);
}
