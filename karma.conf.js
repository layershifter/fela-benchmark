module.exports = (config) => {
  config.set({
    autoWatch: false,
    concurrency: 1,
    singleRun: true,

    frameworks: ["benchmark"],
    files: ["bench/**/*.bench.js"],

    preprocessors: {
      "bench/**/*.bench.js": ["rollup"],
    },
    rollupPreprocessor: {
      plugins: [
        require("@rollup/plugin-commonjs")(),
        require("@rollup/plugin-node-resolve").default(),
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
