#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Display of Colorfull Welcome Message
console.log(chalk.bold.red("\n \t\tCoding with AFREEN , word counter"));
console.log("=".repeat(30));
//from a user a center
let answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
//Trmming the sentence splitting it into a word base on spaces
let words = answer.sentence.trim().split(" ");
// Analysis of user input sentence
console.log("*".repeat(30));
console.log(chalk.bold(" -sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count:${chalk.bold.green(words.length)}`));
console.log("*".repeat(34));
