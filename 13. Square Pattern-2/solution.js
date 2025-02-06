for (let row = 1; row <= 5; row++) {
  let str = "";
  if (row === 1 || row === 5) {
    for (let col = 1; col <= 5; col++) {
      str += "*";
    }
  } else {
    for (let col = 1; col <= 5; col++) {
      if (col === 1 || col === 5) {
        str += "*";
      } else {
        str += " ";
      }
    }
  }
  console.log(str);
}
