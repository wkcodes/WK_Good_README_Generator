const inquirer = require("inquirer");
const fs = require("fs");
//const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project"
    }
  ]);
}

promptUser()
  .then(function(answers) {
    const README = generateReadme(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });

function generateREADME(answers) {
  return `
# ${answers.title}

Description: ${answers.description}

`
}


