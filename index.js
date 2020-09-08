//Import node modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//User prompts
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title of your project: "
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project: "
    },
    {
      type: "input",
      name: "installation",
      message: "Provide its installation instructions: "
    },
    {
      type: "input",
      name: "usage",
      message: "Provide info regarding usage: "
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter guidelines for contribution: "
    },
    {
      type: "input",
      name: "tests",
      message: "Provide info for tests: "
    }
  ]);
}

//Prompt user
promptUser()
  .then(function(answers) {
    const README = generateREADME(answers);
    console.log(README)

    //return writeFileAsync("./examples/README.html", html);
    fs.writeFile("README.md", generateREADME(answers),function(err){
        if(err){
            return console.log("err")
        }
        console.log("Success")
    })
  })
  .catch(function(err) {
    console.log(err);
  });

//Format answers
function generateREADME(answers) {
  return `
# Title: ${answers.title}

Description: ${answers.description}

Installation: ${answers.installation}

Usage: ${answers.usage}

Contributing: ${answers.contributing}

Tests: ${answers.tests}

~ README created with Good_README_Generator ~
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

`
}
