const axios = require("axios");
const keepaliveAgent = require("../config");
const minRetention_Schema = require("./crimelock_min_retention.json");
const minRetentionData = require("./minRetentionData.json");

const API_KEY = process.env.API_KEY;

const calcUrl = process.env.CALC_URL;

module.exports = seed_minRetention = async () => {
  await axios({
    method: "delete",
    url: calcUrl + "lookup-schemas/crimelock_min_retention",
    headers: {
      api_key: API_KEY,
      accept: "application/json",
    },
  }).catch((e) =>
    console.log(
      'Error on deleting "crimelock_min_retention", This may indicate that this LookUp Schema was already deleted'
    )
  );

  await axios({
    method: "post",
    url: calcUrl + "lookup-schemas",
    headers: {
      accept: "application/json",
      api_key: API_KEY,
      "Content-Type": "application/json",
    },
    data: minRetention_Schema,
  });

  minRetentionData.forEach(async (data) => {
    const jsonData = JSON.stringify(data);
    await axios({
      method: "post",
      url: calcUrl + "lookups/crimelock_min_retention",
      headers: {
        accept: "application/json",
        api_key: API_KEY,
        "Content-Type": "application/json",
      },
      data: jsonData,
      httpsAgent: keepaliveAgent,
    });
  });
  console.log("SEEDING MINIMUM RETENTION DATA IS COMPLETED");
};
