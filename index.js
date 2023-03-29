// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide usage instructions:",
    name: "usage",
  },
  {
    type: "list",
    message: "Please select a license for your project:",
    name: "license",
    choices: [
      "MIT",
      "GNU GPLv3",
      "Apache License 2.0",
      "Mozilla Public License 2.0",
    ],
  },
  {
    type: "input",
    message: "Please provide contribution guidelines:",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please provide test instructions:",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully wrote ${fileName}`);
    }
  });
}

const writeFileAsync = util.promisify(writeToFile);

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);

    writeFileAsync("GENERATED_README.md", markdown)
      .then(() => {
        console.log("Successfully wrote README.md file");
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

// Function call to initialize app
init();
