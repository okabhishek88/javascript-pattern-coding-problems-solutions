for (let row = 1; row <= 5; row++) {
  let str = "";
  for (let col = 1; col <= 5; col++) {
    if (col === row) {
      str += "*";
    } else {
      str += " ";
    }
  }
  console.log(str);
}
