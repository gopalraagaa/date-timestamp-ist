#!/usr/bin/env node
/**
* Print the current date and time
*
* @return {String}
*/

"use strict";

var chalk = require("chalk"),
    clear = require("clear"),
    figlet = require("figlet");

clear();

var currentTimeStatus = "Current date and time Initiated ";
process.stdout.write("\n"+currentTimeStatus+"\n");

function getTime(req, res, next) {
    var currentTime = "Current date and time : " + new Date();
    return currentTime;
}