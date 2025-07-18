const { defineConfig } = require("cypress");

module.exports = defineConfig({
  downloadsFolder: "./downloads",
  fixturesFolder: "./fixtures",
  screenshotsFolder: "./screenshots",
  videosFolder: "./videos",
  e2e: {
    baseUrl: "https://iam.toprate.io/auth/realms/mytel/protocol/openid-connect/auth?client_id=admin-web&redirect_uri=https%3A%2F%2Fmytel-fe.toprate.io%2Fcar%2Fcar-management&state=7d893130-e4f9-4d1b-8622-e30dc574a4bc&response_mode=fragment&response_type=code&scope=openid&nonce=50f26b72-47ef-4e38-8bc0-0be263db16d0",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});