/**
 * Latihan membuat berbagai segitiga
 */
let s = "";

for (let i = 10; i >= 0; i--) {
  for (let j = 0; j < 10 - i; j++) {
    s += " ";
  }

  for (let k = 0; k <= i; k++) {
    s += "*";
  }

  s += "\n";
}

console.log(s);
