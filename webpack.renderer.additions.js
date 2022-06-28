module.exports = function (config) {
  const cssRule = config.module.rules.find((rule) => {
    return rule.test.toString().match(/css/);
  });
  cssRule.use.push({
    loader: "postcss-loader",
  });
  return config;
};
