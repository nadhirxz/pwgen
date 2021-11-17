# Password generator
A simple Node.js command line password generator

## Usage

Install dependencies

```
npm install
```

Run

```
node index [options]
```

## Link

Use `npm link` to create a symlink to run `pwgen` from anywhere

Now you can run
```
pwgen [options]
```

Use `npm unlink` to remove symlink


## Options
```
  -V, --version            output the version number
  -l, --length <number>    length of the password (default: "16")
  -uc, --uppercase         uppercase only
  -lc, --lowercase         lowercase only
  -nl, --no-letters        no letters
  -nn, --no-numbers        no numbers
  -ns, --no-symbols        no symbols
  -s, --save               save password to file
  -o, --output <filename>  output file (default: "passwords.txt")
  -nc, --no-copy           disable copying password to clipboard
  -h, --help               display help for command
```