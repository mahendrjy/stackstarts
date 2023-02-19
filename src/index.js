const inquirer = require('inquirer')
const chalk = require('chalk')

async function askForChoices(choices) {
  const choice = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Select your preferred template:',
      choices,
    },
  ])

  return choice
}

const createTemplate = async () => {
  const { choice } = await askForChoices([
    'Template 1',
    'Template 2',
  ])

  console.log(chalk.green(`Successfully created ${choice}`))
}

createTemplate()
