var fs = require ('fs');
var fsp = require('./lib/fsp');


// fsp.readFile('./data/lorem.txt')
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });

// fsp.writeFile('./data/test.txt', 'Hello!')
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });

fsp.appendFile('./data/test.txt', 'Hello again!')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });