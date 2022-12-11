const Agent = require("agentkeepalive").HttpsAgent;

const keepaliveAgent = new Agent({
  maxSockets: 90, // or 128 / os.cpus().length if running node across multiple CPUs
  maxFreeSockets: 90, // or 128 / os.cpus().length if running node across multiple CPUs
  timeout: 60000,
  freeSocketTimeout: 30000,
});

module.exports = keepaliveAgent;
