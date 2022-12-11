const axios = require("axios");

const claimLoad_schema = require("./claimLoad_schema.json");
const claimLoadData = require("./claimLoadData.json");
const keepaliveAgent = require("../config");
const API_KEY = process.env.API_KEY;

const calcUrl = process.env.CALC_URL;

module.exports = seed_claimLoad = async () => {
  await axios({
    method: "delete",
    url: calcUrl + "lookup-schemas/crimelock_claim_load",
    headers: {
      api_key: API_KEY,
      accept: "application/json",
    },
  }).catch((e) => {
    console.log(
      'Error while deleting "crimelock_claim_load", This may indicate that this schema is already deleted'
    );
  });

  await axios({
    method: "post",
    url: calcUrl + "lookup-schemas",
    headers: {
      accept: "application/json",
      api_key: API_KEY,
      "Content-Type": "application/json",
    },
    data: claimLoad_schema,
  });

  claimLoadData.forEach(async (data) => {
    const jsonData = JSON.stringify(data);
    await axios({
      method: "post",
      url: calcUrl + "lookups/crimelock_claim_load",
      headers: {
        accept: "application/json",
        api_key: API_KEY,
        "Content-Type": "application/json",
      },
      data: jsonData,
      httpsAgent: keepaliveAgent,
    });
  });
  console.log("SEEDING CLAIM LOAD IS COMPLETED");
};
