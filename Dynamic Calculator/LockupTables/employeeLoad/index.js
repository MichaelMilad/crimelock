const axios = require("axios");
const keepaliveAgent = require("../config");
const empLoad_schema = require("./crimelock_Emp_load.json");
const empLoadData = require("./Emp_load_data.json");

const API_KEY = process.env.API_KEY;

const calcUrl = process.env.CALC_URL;

module.exports = seed_empLoad = async () => {
  await axios({
    method: "delete",
    url: calcUrl + "lookup-schemas/crimelock_emp_load",
    headers: {
      api_key: API_KEY,
      accept: "application/json",
    },
  }).catch((e) =>
    console.log(
      'Error on deleting "crimelock_emp_laod", This may indicate that this LookUp Schema was already deleted'
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
    data: empLoad_schema,
  });

  empLoadData.forEach(async (data) => {
    const jsonData = JSON.stringify(data);
    await axios({
      method: "post",
      url: calcUrl + "lookups/crimelock_emp_load",
      headers: {
        accept: "application/json",
        api_key: API_KEY,
        "Content-Type": "application/json",
      },
      data: jsonData,
      httpsAgent: keepaliveAgent,
    });
  });
  console.log("SEEDING EMPLOYEE LOAD IS COMPLETED");
};
