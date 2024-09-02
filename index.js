#!/usr/bin/env node

import figlet from "figlet";
import chalk from "chalk";
import boxen from "boxen";
import clear from "clear";

clear();

// Generate the "UNDER CONSTRUCTION" text with figlet
const underConstruction = figlet.textSync("UNDER", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
});

const construction = figlet.textSync("CONSTRUCTION", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
});

// Additional creative message
const message = `
${chalk.cyanBright("Great things take time, but this is going to be worth the wait!")}
${chalk.cyanBright("Thank you for your patience and support.")}`;

const fullMessage = `${chalk.hex('#FBEAEB')(underConstruction)}\n${chalk.hex('#FBEAEB')(construction)}`;

const box = boxen(fullMessage, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "blueBright",
    backgroundColor: "black",
    align: "center",
    width: process.stdout.columns - 4, // Adjusting the box size to fit the terminal
});

console.log(box);

