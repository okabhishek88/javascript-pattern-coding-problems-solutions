for (let row = 1; row <= 5; row++) {
  let str = "";
  if (row <= 3) {
    for (let col = 1; col <= 5; col++) {
      if (col === row) {
        str += "*";
      } else {
        str += " ";
      }
    }
  } else {
    for (let col = 1; col <= 5; col++) {
      if (col === row || col === 6 - row) {
        str += "*";
      } else {
        str += " ";
      }
    }
  }
  console.log(str);
}
