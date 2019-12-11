const constants = require("./constants");

const configs = [];

constants.COMPONENTS.forEach(component => {
    let config = require(`./configs/${component}.webpack.config`);
    config.mode = "production";
    configs.push(config);
});

module.exports = configs;