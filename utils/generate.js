const { randomInt } = require('crypto');

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=~';

const generatePassword = (length = 16, hasNumbers = true, hasSymbols = true, hasUppercase = false, hasLowercase = false) => {
	const chars = (hasUppercase || hasLowercase ? '' : lowercase + uppercase) + (hasLowercase ? lowercase : '') + (hasUppercase ? uppercase : '') + (hasNumbers ? numbers : '') + (hasSymbols ? symbols : '');
	return Array.from(Array(parseInt(length)), e => chars[randomInt(chars.length)]).join('');
};

module.exports = { generatePassword };
