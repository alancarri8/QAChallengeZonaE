const { defineConfig } = require("cypress");
require("dotenv").config({
  path: ".env",
});

module.exports = defineConfig({
  allowCypressEnv: true,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportPageTitle: "Challenge ZE",
    embeddedScreenshots: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      config.env.BASE_URL = process.env.BASE_URL;
      config.env.USERVALIDO = process.env.USERVALIDO;
      config.env.PASSVALIDO = process.env.PASSVALIDO;
      config.env.BASE_URLZ = process.env.BASE_URLZ;
      config.env.USERZ = process.env.USERZ;
      config.env.PASSZ = process.env.PASSZ;

      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
