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

const output = chalk.blue('Hello, Twitch!')

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, boxenOptions)))