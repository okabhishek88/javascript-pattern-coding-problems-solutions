for (let row = 1; row <= 5; row++) {
  let str = "";
  if (row === 1 || row === 5) {
    for (let col = 1; col <= 5; col++) {
      str += "*";
    }
  }
  if (row === 2 || row === 4) {
    for (let col = 1; col <= 5; col++) {
      if (col === 3) {
        str += " ";
      } else {
        str += "*";
      }
    }
  }
  if (row === 3) {
    for (let col = 1; col <= 5; col++) {
      if (col === 2 || col === 4) {
        str += " ";
      } else {
        str += "*";
      }
    }
  }
  console.log(str);
}
