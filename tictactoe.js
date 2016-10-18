#!/usr/bin/env node

/* jshint esversion: 6 */

'use strict';

const program = require('commander');

program
  .version('1.0')
  .option('-h, --help', 'View help docs')
  .option('-x, -X <xPosition>', 'Play for X')
  .option('-o, -O <oPosition>', 'Play for O')
  .option('-r, --reset', 'Reset the board')
  .option('-s, --start', 'Start a new game')
  .parse(process.argv);
