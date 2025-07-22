const { defineConfig } = require("cypress");

module.exports = defineConfig({
  downloadsFolder: "./downloads",
  fixturesFolder: "./fixtures",
  screenshotsFolder: "./screenshots",
  videosFolder: "./videos",
  e2e: {
    pageLoadTimeout: 120000, // 2 minutes
    defaultCommandTimeout: 10000,
    baseUrl: "https://mytel-fe.toprate.io/",
    experimentalSessionAndOrigin: true,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});