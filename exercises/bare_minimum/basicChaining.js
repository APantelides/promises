/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */
var GitHub = require('../bare_minimum/promisification.js');
var readshit = require('../bare_minimum/promiseConstructor.js');
var fs = require('fs');
var Promise = require('bluebird');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return readshit.pluckFirstLineFromFileAsync(readFilePath)
  .then(function (data) {
    return GitHub.getGitHubProfileAsync(data);
  })
  .then(function(profile) {
    fs.writeFileSync(writeFilePath, JSON.stringify(profile));
  });
};


// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
