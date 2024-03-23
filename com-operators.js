/*let result = 3 + 4 * 5;
result++
console.log(result);

import inquirer from "inquirer"
const input1 = await inquirer.prompt([{
    name: "num1",
    type: "number",
    message: "kindly enter your first no:",
}]);
const input2 = await inquirer.prompt([{
    name: "num2",
    type: "number",
    mesaage: "kindly enter your second no:",
}]);
let total: number = input1.num1 + input2.num2
console.log(total);*/
//BMI CALCULATOR
let weightInKg = 70;
let heightInMeters = 1.75;
let bmi = weightInKg / (heightInMeters * heightInMeters);
console.log(`your Bmi Is ${bmi}`);
export {};
