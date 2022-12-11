const axios = require("axios");
const keepaliveAgent = require("../config");
const revLoad_schema = require("./crimelock_revenuelaodSchema.json");
const revLoadData = require("./rev_load_data.json");
const API_KEY = process.env.API_KEY;
const calcUrl = process.env.CALC_URL;

module.exports = seed_limitLoad = async () => {
  await axios({
    method: "delete",
    url: calcUrl + "lookup-schemas/crimelock_rev_load",
    headers: {
      api_key: API_KEY,
      accept: "application/json",
    },
  }).catch((e) =>
    console.log(
      'Error on deleting "crimelock_rev_load", This may indicate that this LookUp Schema was already deleted'
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
    data: revLoad_schema,
  });

  function seedingData() {
    revLoadData.forEach((data) => {
      const jsonData = JSON.stringify(data);
      axios({
        method: "post",
        url: calcUrl + "lookups/crimelock_rev_load",
        headers: {
          accept: "application/json",
          api_key: API_KEY,
          "Content-Type": "application/json",
        },
        data: jsonData,
        httpsAgent: keepaliveAgent,
      });
    });
  }
  seedingData();
  console.log("SEEDING REV LOAD IS  COMPLETED");
};
