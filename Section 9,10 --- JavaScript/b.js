// n = Math.random();
// n *= 6;
// n = Math.round(n);
// console.log(`The Random Number is: ${n}`);

// n = Math.random();
// n *= 100;
// n = Math.round(n);

// if (n >= 90) {
//   console.log(`Love Percentage Between a and b is ${n}% strongest`);
// } else if (n >= 60) {
//   console.log(`Love Percentage Between a and b is ${n}% strong.`);
// } else {
//   console.log(`Love Percentage Between a and b is ${n}% weak.`);
// }
// console.log(`Love Percentage Between a and b is ${n}%.`);

// // leap year
// function leapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         console.log(`${year} is leap year.`);
//       } else {
//         console.log(`${year} is not leap year.`);
//       }
//     } else {
//       console.log(`${year} is leap year.`);
//     }
//   } else {
//     console.log(`${year} is not leap year.`);
//   }
// }

// leapYear(2002);

// // javascript arrays
// eggs = [];
// for (let i = 0; i < 25; i++) {
//   eggs.push(i);
// }

// for (let i = 0; i < 25; i++) {
//   console.log(eggs[i]);
// }
// for (let i = 0; i < 10; i++) {
//   eggs.pop(i);

// }
// console.log(eggs.includes(12));
// console.log(eggs.length);

// // Fizz Buzz
// function FizzBuzz() {
//   numbers = [];

//   for (let i = 1; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       numbers.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       numbers.push("Fizz");
//     } else if (i % 5 === 0) {
//       numbers.push("Buzz");
//     } else {
//       numbers.push(i);
//     }
//   }
//   console.log(numbers);
// }
// FizzBuzz();

// // who's buying lunch?
// function buyingLunch() {
//   names = ["a","b","c","d","e","f","g","h","i","j"];
//   n = Math.floor(Math.random() * names.length);
//   buyer = names[n];
//   console.log(`${buyer} will buy us lunch today!`)
// }

// buyingLunch();

// // while loop fizzbuzz
// function FizzBuzz() {
//   numbers = [];
//   i = 1;
//   while (i < 101) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       numbers.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       numbers.push("Fizz");
//     } else if (i % 5 === 0) {
//       numbers.push("Buzz");
//     } else {
//       numbers.push(i);
//     }
//     i++;
//   }
//   console.log(numbers);
// }

// FizzBuzz();


// i = 100;
// while (i > 0) {
//   console.log(`${i} bottles of beer on the wall,${i} bottles of bear,Take 1 down,pass it around,${i-1} bottles of beer on the wall.`)
//   i--;
// }

function fibonacci(n){
    output = [];
  
    if (n === 1) {
      output = [0];
    }else if(n === 2) {
      output = [0,1];
    }
    else{
      output = [0,1];
      for (var i = 2; i < n; i++) {
        output.push(output[output.length - 2] + output[output.length - 1])
      }
    }
    console.log(output);
  }
  
  fibonacci(10);