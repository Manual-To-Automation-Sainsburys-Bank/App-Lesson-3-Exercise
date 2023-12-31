var defaults = require("./wdio-bstack.conf.js");
var _ = require("lodash");

var overrides = {
  specs: ["./test/specs/textfield.spec.js"],
  services: [
    [ 'browserstack',
      {
        app: "apps/sample-app.ipa",
      },
    ],
  ],

  capabilities: [
    {
      maxInstances: 1,
      device: "iPhone 14",
      os_version: "16",
      platformName: "iOS",
    },
  ],
};

const tmpConfig = _.defaultsDeep(overrides, defaults.config);

tmpConfig.capabilities.forEach((caps) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = tmpConfig;
