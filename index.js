#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const colors = require('colors');
const ncp = require('node-clipboardy');

const createPassword = require('./utils/createPassword');
const gereratePassword = require('./utils/gereratePassword');
const savePassword = require('./utils/savePassword');



program
    .description('Simple Password Generator')
    .version('1.0.0')

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to passwords.txt')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
   
program.parse();

const { length, save, numbers, symbols } = program.opts();
// console.log({numbers, symbols });



// Get generated password
const generatedPassword = createPassword( length, numbers, symbols );

// Save to file
if( save ) {
    savePassword( generatedPassword );
}

// Copy to clipboardy
ncp.writeSync( generatedPassword );


// Output generated password
console.log( 'Generated Password = '.blue + (generatedPassword) );
console.log( 'Password copied to clipboard'.yellow );
