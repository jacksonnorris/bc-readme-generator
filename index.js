const inquirer = require('inquirer');
const fs = require('fs');

const licenses = ['MIT', 'Other'];


inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'What License Type?',
        name: 'license',
        choices: licenses,
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the descrption ?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'How do you test it?',
        name: 'test'
    }
]).then((answers) => {
    console.log(answers);
    // move README to here
    // fs.writeFile('/readmeArea/README.md', readMe, (err) =>  {
    //     err ? console.error(err) : console.log('Success!')
    //   });
});

//MOVE
const readMe = `# ${answers.title}

## Description

${answers.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

${answers.instructions}

## Usage

${answers.usage}

## License

![License](https://img.shields.io/static/v1?label=License&message=${answers.license}&color=red)

## How to Contribute

${answers.contribution}

## Tests

${answers.test}`;

console.log(readMe);