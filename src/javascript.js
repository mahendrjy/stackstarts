const { createTemplate } = require('./utils.js')

const templates = [
  'vite : npm create vite@latest',
  'React : npx create-react-app',
  'NextJS : npx create-next-app@latest',
]

const createJavaScriptTemplate = async () =>
  createTemplate(templates)

module.exports = createJavaScriptTemplate
