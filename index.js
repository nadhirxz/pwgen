#!/usr/bin/env node
const { program } = require('commander');
const { generatePassword } = require('./utils/generate');
const { savePassword } = require('./utils/save');

program.version('1.0.0').description('Password generator');

program
	.option('-l, --length <number>', 'length of the password', '16')
	.option('-uc, --uppercase', 'uppercase only')
	.option('-lc, --lowercase', 'lowercase only')
	.option('-nl, --no-letters', 'no letters')
	.option('-nn, --no-numbers', 'no numbers')
	.option('-ns, --no-symbols', 'no symbols')
	.option('-s, --save', 'save password to file')
	.option('-o, --output <filename>', 'output file', 'passwords.txt')
	.parse();

const { length, numbers, symbols, uppercase, lowercase, save, output } = program.opts();
const password = generatePassword(length, numbers, symbols, uppercase, lowercase);

console.log('Generated password:', password);

if (save) savePassword(password, output);
