import { r, re, ro } from "./pre";

suite("background", () => {
  benchmark("fela", () => {
    r.renderRule(() => ({ background: "red" }));
  });

  benchmark("fela + expand", () => {
    re.renderRule(() => ({ background: "red" }));
  });

  benchmark("fela + our expand", () => {
    ro.renderRule(() => ({ background: "red" }));
  });
});
