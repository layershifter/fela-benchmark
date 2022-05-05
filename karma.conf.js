module.exports = (config) => {
  config.set({
    autoWatch: false,
    concurrency: 1,
    singleRun: true,

    customLaunchers: {
      Chrome_without_security: {
        base: "ChromeHeadless",
        flags: ["--disable-gpu", "--no-sandbox"],
      },
    },

    frameworks: ["benchmark"],
    files: ["bench/**/*.bench.js"],

    preprocessors: {
      "bench/**/*.bench.js": ["rollup"],
    },
    rollupPreprocessor: {
      plugins: [
        require("@rollup/plugin-commonjs")(),
        require("@rollup/plugin-node-resolve").default(),
        require("@rollup/plugin-replace")({
          "process.env.NODE_ENV": JSON.stringify("production"),
        }),
      ],
      output: {
        format: "iife",
        name: "bench",
        sourcemap: "inline",
      },
    },
    reporters: ["benchmark"],
  });
};
