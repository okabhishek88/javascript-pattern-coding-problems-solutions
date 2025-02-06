for (let row = 1; row <= 4; row++) {
  let str = "";
  for (let i = 1; i <= row; i++) {
    str += "$";
  }
  console.log(str);
}

for (let row = 5; row >= 1; row--) {
  let str = "";
  for (let i = 1; i <= row; i++) {
    str += "%";
  }
  console.log(str);
}
