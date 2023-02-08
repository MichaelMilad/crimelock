const axios = require("axios");
const keepaliveAgent = require("../config");

const limitLoad_schema = require("./crimelock_limitLoadSchema.json");
const limitLoadData = require("./limit_load_data.json");

const API_KEY = process.env.API_KEY;

const calcUrl = process.env.CALC_URL;

module.exports = seed_limitLoad = async () => {
  await axios({
    method: "delete",
    url: calcUrl + "lookup-schemas/crimelock_limit_load",
    headers: {
      api_key: API_KEY,
      accept: "application/json",
    },
  }).catch((e) =>
    console.log(
      'Error on deleting "crimelock_limit_rate", This may indicate that this LookUp Schema was already deleted'
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
    data: limitLoad_schema,
  });

  async function seedingData() {
    limitLoadData.forEach((data) => {
      const jsonData = JSON.stringify(data);
      axios({
        method: "post",
        url: calcUrl + "lookups/crimelock_limit_load",
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
  await seedingData();
  console.log("SEEDING LIMIT LOAD IS COMPLETED");
};
