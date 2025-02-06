let variable = 1;
for (let row = 1; row <= 4; row++) {
  let str = "";
  for (let col = 1; col <= row; col++) {
    str += variable;
    variable++;
  }
  console.log(str);
}
