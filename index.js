#!/usr/bin/env node
const { program } = require('commander');
const { generatePassword } = require('./utils/generate');

program.version('1.0.0').description('Password generator');

program
	.option('-l, --length <number>', 'length of the password', '16')
	.option('-uc, --uppercase', 'uppercase only')
	.option('-lc, --lowercase', 'lowercase only')
	.option('-nl, --no-letters', 'no letters')
	.option('-nn, --no-numbers', 'no numbers')
	.option('-ns, --no-symbols', 'no symbols')
	.parse();

const { length, numbers, symbols, uppercase, lowercase } = program.opts();

console.log('Generated password:', generatePassword(length, numbers, symbols, uppercase, lowercase));