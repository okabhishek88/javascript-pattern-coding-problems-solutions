for (let row = 1; row <= 5; row++) {
  let str = "";
  for (let col = 5; col >= row; col--) {
    str += col;
  }
  console.log(str);
}
