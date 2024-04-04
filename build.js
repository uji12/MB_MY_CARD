'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  float: 'center',
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('   Ujjwal Roy 👋'),
  handle: chalk.white('@ur99'),
  work: chalk.white('Full Stack Developer'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('Phoneix_99_'),
  github: chalk.gray('https://github.com/') + chalk.green('uji12'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('ujjwal-roy-50684b17a/'),
  web: chalk.cyan('https://abc-omega-one.vercel.app/'),
  npx: chalk.red('npx') + ' ' + chalk.white('maababa'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.hex('#DA0060')(boxen(output, options)))
