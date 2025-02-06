let variable = 1;
for (let row = 1; row <= 3; row++) {
  let str = "";
  for (let space = 1; space <= 3 - row; space++) {
    str += " ";
  }
  for (let col = 1; col <= 2 * row - 1; col++) {
    str += variable;
    variable++;
  }
  console.log(str);
}
