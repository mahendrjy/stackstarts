const inquirer = require('inquirer')
const chalk = require('chalk')
const { execFileSync } = require('child_process')

const displaySuccessMessage = () => {
  chalk.green(`Successfully created template`)
}

const displayErrorMessage = (error) => {
  chalk.red(`Failed to create template: ${error.message}`),
    console.log(
      'To get help with this problem, please submit an issue to: ',
    )
  console.log(
    'https://github.com/mahendrjy/stackstarts/issues\n',
  )
}

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

const createTemplate = async (choices) => {
  const { choice } = await askForChoices(choices)

  const [templateName, command] = choice.split(':')

  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter the project name:',
      default: 'app',
    },
  ])

  chalk.yellow(
    `Creating ${templateName} app "${projectName} with command ${command.trim()} ${projectName}"`,
  )

  const [executable, ...appCreationScript] = command
    .trim()
    .split(' ')

  execFileSync(executable, [...appCreationScript, projectName], {
    stdio: 'inherit',
  })

  displaySuccessMessage()
}

module.exports = {
  askForChoices,
  createTemplate,
  displayErrorMessage,
}
