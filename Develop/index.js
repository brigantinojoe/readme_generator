// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
},
{
    type: "input",
    name: "email",
    message: "What is your email address?",
},
{
    type: "input",
    name: "title",
    message: "What is your project's name?",
},
{
    type: "input",
    name: "description",
    message: "Please write a short description of your project:",
},
{
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
},
{
    type: "input",
    name: "installation",
    message: "What command should be run to install dependecencies?",
},
{
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
},
{
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
},
{
    type: "input",
    name: "contribution",
    message: "What does the user need to know about contributing to the repo?",
}
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }
inquirer.prompt(questions).then((data) => {
    const template = `
# ${data.title.trim()}
![GitHub license](https://img.shields.io/badge/license-${data.license.replace(" ","%20")}-blue.svg)

## Description
${data.description.trim()}
## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation.trim()}
\`\`\`

## Usage
${data.usage.trim()}

## License
This project is licensed under the ${data.license.trim()} license.

## Contributing
${data.contribution.trim()}

## Tests
To run tests, run the following command:
\`\`\`
${data.tests.trim()}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email.trim()}. You can find more of my work at [${data.username.trim()}](https://github.com/${data.username.trim()}).
`

    fs.writeFile("./README.md", template, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    console.log(data);
});