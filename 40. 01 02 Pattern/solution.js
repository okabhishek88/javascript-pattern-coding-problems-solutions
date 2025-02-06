for (let row = 1; row <= 5; row++) {
  str = "";
  for (let col = 1; col <= row; col++) {
    str += "0" + col + " ";
  }
  console.log(str);
}
