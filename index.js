#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: " select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    }
]);
// conditional statement
if (answers.operator === "addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
;
