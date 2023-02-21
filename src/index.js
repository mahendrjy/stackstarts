#!/usr/bin/env node

const createJavaScriptTemplate = require('./javascript.js')
const createTypeScriptTemplate = require('./typescript.js')
const { askForChoices, displayErrorMessage } = require('./utils')

const choices = ['JavaScript', 'TypeScript']

async function createTemplate() {
  const { choice } = await askForChoices(choices)

  if (choice === 'JavaScript') await createJavaScriptTemplate()
  if (choice === 'TypeScript') await createTypeScriptTemplate()
}

;(async () => {
  try {
    await createTemplate()
  } catch (e) {
    displayErrorMessage(e)
  }
})()
