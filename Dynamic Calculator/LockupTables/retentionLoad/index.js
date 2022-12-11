const axios = require("axios");
const keepaliveAgent = require("../config");
const retentionLoad_Schema = require("./crimelock_retention_loadSchema.json");
const retentionLoadData = require("./retentionLoadData.json");

const API_KEY = process.env.API_KEY;

const calcUrl = process.env.CALC_URL;

module.exports = seed_retentionLoad = async () => {
  await axios({
    method: "delete",
    url: calcUrl + "lookup-schemas/crimelock_retention_load",
    headers: {
      api_key: API_KEY,
      accept: "application/json",
    },
  }).catch((e) =>
    console.log(
      'Error on deleting "crimelock_retention_load", This may indicate that this LookUp Schema was already deleted'
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
    data: retentionLoad_Schema,
  });

  retentionLoadData.forEach(async (data) => {
    const jsonData = JSON.stringify(data);
    await axios({
      method: "post",
      url: calcUrl + "lookups/crimelock_retention_load",
      headers: {
        accept: "application/json",
        api_key: API_KEY,
        "Content-Type": "application/json",
      },
      data: jsonData,
      httpsAgent: keepaliveAgent,
    });
  });
  console.log("SEEDING  RETENTION LOAD IS COMPLETED");
};
