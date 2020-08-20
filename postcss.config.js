const config = {
  plugins: [
    require("postcss-easy-import"),
    require("postcss-bemed"),
    require("postcss-autoreset")({
      rulesMatcher: "bem",
      reset: {
        all: "initial",
        fontFamily: "'Lato', sans-serif",
      },
    }),
    require("autoprefixer"),
  ],
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    require("cssnano")({
      preset: "default",
    })
  );
}

module.exports = config;
