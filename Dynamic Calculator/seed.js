require("dotenv").config();

const seed_limitLoad = require("./LockupTables/limitLoad");
const seed_empLoad = require("./LockupTables/employeeLoad");
const seed_revLoad = require("./LockupTables/revenueLoad");
// const seed_claimLoad = require("./LockupTables/claimLoad");
const seed_minRetention = require("./LockupTables/minimumRetention");
const seed_retentionLoad = require("./LockupTables/retentionLoad");

async function seedAll() {
  await seed_limitLoad();
  await seed_empLoad();
  await seed_revLoad();
  // await seed_claimLoad();
  await seed_minRetention();
  await seed_retentionLoad();
}

seedAll();