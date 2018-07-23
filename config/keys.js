// if (process.env.NODE_ENV === undefined) {
//   //console.log("process.env.NODE_ENV is undefined if-else flow in keys.js");
//   module.exports = require('./dev');
// } else if (process.env.NODE_ENV === 'production') {
//   console.log('process.env.NODE_ENV === production flow: ' + process.env.NODE_ENV );
//   module.exports = require('./prod');
// } else {
//   console.log('process.env.NODE_ENV is neither undefined nor production : ' +
//       process.env.NODE_ENV
//   );
//   module.exports = require('./dev');
// }
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}