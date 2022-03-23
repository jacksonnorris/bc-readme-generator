const inquirer = require('inquirer');
const fs = require('fs');
const mkDwn = require('./utils/generateMarkdown')

const licenses = ['MIT', 'BSD', 'Apache'];


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
        type: 'input',
        message: 'What is your Github username?',
        name: 'gHub'
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
    const readMe = mkDwn.generate([answers.title, answers.description, answers.instructions, answers.usage, answers.license, answers.usage, answers.contribution, answers.test, answers.name, answers.email, answers.gHub]);
    fs.writeFile('./readmeArea/README.md', readMe, (err) =>  {
        err ? console.error(err) : console.log('Success!')
      });

});

