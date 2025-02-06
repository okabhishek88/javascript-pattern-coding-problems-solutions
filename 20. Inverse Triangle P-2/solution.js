for (let row = 5; row >= 1; row--) {
  let str = "";
  for (let col = 1; col <= row; col++) {
    str += "A";
  }
  console.log(str);
}
console.log("\n");
for (let row = 1; row <= 5; row++) {
  let str = "";
  for (let col = 1; col <= row; col++) {
    str += "B";
  }
  console.log(str);
}
