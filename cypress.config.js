const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  



  e2e: {
    baseUrl:'https://demoqa.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
  video: true,                // enable video recording
  screenshotOnRunFailure: true, // take screenshot when test fails

  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
    downloadsFolder: 'cypress/downloads'

});
