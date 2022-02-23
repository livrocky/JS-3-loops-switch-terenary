// kol ciklas

let i = 0;
while (i < 10) {
  //ciklo body
  console.log("I do while cycle");
  i++;
}

//do while

i = 100;
do {
  console.log("Do I do while cycle" + i);
  i++;
} while (i < 10);

//ridenti kauliukus  tol kol ismesim 12

let points = 2;
do {
  points = Math.floor(Math.random() * 11) + 2;
  console.log(`isridenau ${points}`);
} while (points !== 12);
