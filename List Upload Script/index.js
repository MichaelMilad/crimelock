const axios = require('axios');
const Agent = require('agentkeepalive').HttpsAgent;

const listData = require('./listData.json');

const keepaliveAgent = new Agent({
  maxSockets: 60, // or 128 / os.cpus().length if running node across multiple CPUs
  maxFreeSockets: 60, // or 128 / os.cpus().length if running node across multiple CPUs
  timeout: 60000,
  freeSocketTimeout: 30000,
});

listData.forEach(async (item) => {
  await axios({
    method: 'post',
    url: 'https://api.trumarket.dev/list-management/lists',
    data: item,
    headers: {
      Authorization: process.env.TOKEN,  
      'Content-Type': 'application/json',
    },
    httpsAgent: keepaliveAgent,
  })
    .then((data) => console.log('Uploaded With Key', data.statusText))
    .catch((error) =>
      console.log('An Error,', error.response.status, error.response.statusText)
    );
});
