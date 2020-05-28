import { r, re, ro } from "./pre";

suite("border", () => {
  benchmark("fela", () => {
    r.renderRule(() => ({ border: "4px solid red" }));
  });

  benchmark("fela + expand", () => {
    re.renderRule(() => ({ border: "4px solid red" }));
  });

  benchmark("fela + our expand", () => {
    ro.renderRule(() => ({ border: "4px solid red" }));
  });
});
