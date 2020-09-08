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
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license: ",
      choices: ['Creative_Commons','GNU'],
    },
    {
      type: "input",
      name: "gitHub",
      message: "Enter your GitHub username: "
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email: "
    }
  ])
}

//Prompt user
promptUser()

  //Assign data to readme
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

//Licenses:
function licenseGenerator(answers){

  licenseChoice = answers.license;

  switch(licenseChoice){
    case "Creative_Commons":
    userLicense = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
    case "GNU":
    userLicense = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      return userLicense;
  }

}

//Format answers
function generateREADME(answers) {
  let userLicense = licenseGenerator(answers);
  return `

# Project title: ${answers.title}

${userLicense}

* Description: ${answers.description}

* Installation: ${answers.installation}

* Usage: ${answers.usage}

* Contributing: ${answers.contributing}

* Tests: ${answers.tests}

## Contact for questions regarding the project:

 github: ${answers.gitHub}

 email: ${answers.email}

~ README created with Good_README_Generator ~


`
}
