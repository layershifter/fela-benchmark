import { r, re, ro } from "./pre";

/* aka buttonStyles */
const rule = () => ({
  height: "100px",
  minWidth: "200px",
  maxWidth: "200px",
  color: "red",
  background: "green",
  borderRadius: "4px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  padding: "5px",
  verticalAlign: "middle",
  cursor: "pointer",

  outline: 0,
  borderStyle: "solid",
  borderColor: "orange",

  ":hover": {
    color: "green",
    backgroundColor: "reen",
    borderColor: "green",
  },
});

suite("complex", () => {
  benchmark("fela", () => {
    r.renderRule(rule);
  });

  benchmark("fela + expand", () => {
    re.renderRule(rule);
  });

  benchmark("fela + our expand", () => {
    ro.renderRule(rule);
  });
});
