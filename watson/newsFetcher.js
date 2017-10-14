var login = require('../config/config.js');
// var DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
// var promisify = require('bluebird').promisify;
var Axios = require('axios');
// const promiseDiscovery = promisify(DiscoveryV1);
// var discovery = new promiseDiscovery(login);

var id_envir = 'system';
var id_collect = 'news';
var version = '2017-09-01';
var count = 50;
const url = `https://watson-api-explorer.mybluemix.net/discovery/api/v1/
            environments/${id_envir}/collections/${id_collect}/query?
            count=${count}
            &version=${version}`;

console.log(url);
// const discovery = new DiscoveryV1(login);

// discovery.getCollection((id_envir, id_collect), (err, result) => {
  // console.log(JSON.stringify(result));
// })
//   .then( (resolve) => {
//     console.log(JSON.stringify(resolve));
//   })

// Axios.get(url)
