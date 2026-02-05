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

      return config;
    },
  },
});
