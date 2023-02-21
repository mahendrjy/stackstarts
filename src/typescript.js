const { createTemplate } = require('./utils.js')

const templates = [
  'vite : npm create vite@latest',
  'React : npx create-react-app --template typescript',
  'NextJS : npx create-next-app@latest',
]

const createTypeScriptTemplate = async () =>
  createTemplate(templates)

module.exports = createTypeScriptTemplate
