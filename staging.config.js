const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://iwanttohelp-vue.herokuapp.com/',
    //different base url for each env

    //setupNodeEvents(on, config) {
    // implement node event listeners here
  },
},
);
