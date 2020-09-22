const config = {
  plugins: [require("postcss-inline-svg"), require("autoprefixer")],
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    require("cssnano")({
      preset: "default",
    })
  );
}

module.exports = config;
