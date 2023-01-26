let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

name1 = "shubHAM";
sol = name1[0].toUpperCase() + name1.slice(1, name1.length).toLowerCase();
console.log(sol);

dogAge = 12;
humanAge = (dogAge - 2) * 4 + 21;
console.log(`Human age is : ${humanAge}`);

function bottle(bottles) {
  console.log(Math.floor(bottles / 1.5));
}
bottle(28);

function lifeInWeeks(age) {
  yr = 90 - age;
  x = yr * 365;
  y = yr * 52;
  z = yr * 12;
  console.log(`You Have ${x} days ${y} weeks and ${z} months left.`);
}
lifeInWeeks(19);

function getMilk(money,costPerBottle) {
  console.log(
    `You can buy ${calcBottles(money, costPerBottle)} and here is your ${calcChange(
      money,
      costPerBottle
    )} change.`
  );
}

function calcBottles(startingAmount, costPerBottle) {
  noOfBottles = Math.floor(startingAmount / costPerBottle);
  return noOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
  change = startingAmount % costPerBottle;
  return change;
}
getMilk(55,4);

// BMI calculator Challenge

function BMICalculate(weight, height) {
  var bmi = weight / height ** 2;
  console.log(`Your BMI is ${Math.round(bmi)}`);
}
BMICalculate(65, 2);