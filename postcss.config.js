const path = require("path");

const config = {
  plugins: [
    require("postcss-nested"),
    require("postcss-inline-svg")({
      paths: [path.join(__dirname, "src", "icons")],
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
