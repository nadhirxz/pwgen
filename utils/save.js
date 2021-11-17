const { appendFile } = require('fs');
const { join } = require('path');
const { EOL } = require('os');

const savePassword = (password, filename) => {
	appendFile(join(__dirname, '../', filename), password + EOL, err => {
		if (err) throw err;
		console.log(`Password saved to ${filename}`);
	});
};

module.exports = { savePassword };
