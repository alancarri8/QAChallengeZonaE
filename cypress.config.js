const { defineConfig } = require("cypress");
require("dotenv").config({
  path: ".env",
});

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    setupNodeEvents(on, config) {
      config.env.BASE_URL = process.env.BASE_URL;
      config.env.USERVALIDO = process.env.USERVALIDO;
      config.env.PASSVALIDO = process.env.PASSVALIDO;
      config.env.BASE_URLZ = process.env.BASE_URLZ;
      config.env.USERZ = process.env.USERZ;
      config.env.PASSZ = process.env.PASSZ;

      return config;
    },
  },
});
