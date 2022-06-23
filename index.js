"use strict";

var chalk = require("chalk"),
    clear = require("clear"),
    figlet = require("figlet");

var currentTimeStatus = "Current date and time Initiated ";
process.stdout.write("\n"+currentTimeStatus+"\n");

module.exports = {
    getTime: function () {
        var currentTime = "Current IST date and time : " + new Date();
        return currentTime;
    } 
};

