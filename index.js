// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const { type } = require('os');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email addresss?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project.'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license should your project have?',
            choices: ['']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test instructions.'
        }
    ])
}

// write README file
function writeToFile(data) {
    fs.writeFile('README.md', data => {
        console.log("Your README has been created!")
    })
}

questions()
.then(answers => {
    return generateMarkdown(answers);
})
.then(data => {
    return writeToFile(data);
})
.catch(err => {
    console.log(err);
});


// initialize app
function init() {}

// Function call to initialize app
init();
