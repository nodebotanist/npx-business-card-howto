#!/usr/local/bin/node

// require Node.JS native modules
const path = require('path')
const fs = require('fs')

// require third-party modules
const chalk = require('chalk')
const boxen = require('boxen')

// set up Boxen options
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const newLine = '\n'

const output = chalk.blue('Hello, Twitch! I am Ace the 😼') + newLine +
chalk.white('Favorite Food:') + chalk.blue('Plastic Wrap!') + newLine + 
chalk.green('This is from a tutorial about making '+ newLine + 'your own npx cards') + newLine +
chalk.magenta('The tutorial can be found at :') + newLine +
chalk.blue.bold('https://github.com/nodebotanist/npx-business-card-howto') + newLine +
chalk.white('and this was all written on Twitch and with 💜 by ') + newLine +
chalk.yellow('nodebotanist ') + newLine +
chalk.green('run `npx nodebotanist` to learn more!')

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.magenta(boxen(output, boxenOptions)))