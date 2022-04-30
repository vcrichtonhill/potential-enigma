// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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

questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
