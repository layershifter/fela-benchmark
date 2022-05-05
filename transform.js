const fs = require("fs");
const {
  serialize,
  compile,
  middleware,
  rulesheet,
  stringify,
} = require("stylis");

const cssRules = fs.readFileSync("./griffel.css", "utf-8");
const rules = [];

serialize(
  compile(cssRules),
  middleware([
    stringify,
    // individual rules to be used with this API
    rulesheet((rule) => rules.push(rule)),
  ])
);

fs.writeFileSync('./griffel.json', JSON.stringify(rules))

console.log(rules);
