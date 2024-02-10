// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for(let i=0; 
  i<=100; 
  i++) 
 { if(i%2==0)
  console.log(i);}
// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
let i = 1;
while (i <= 100) {
  console.log(i);
  i += 2;
}
// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
let a=3;
do {
  console.log(a);
  a+=3;}
  while(a<=100);

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
for (let l = 2; l < 100; l++) {
  let m = 2;
  let n = 0;
  while (m <= l / 2) {
    if (l % m === 0) {
      n = 1;
    }
    m++;
  }
  if (n === 0) {
    console.log(l);
  }
}
