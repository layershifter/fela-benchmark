import { r, re, ro } from "./pre";

suite("margin", () => {
  benchmark("fela", () => {
    r.renderRule(() => ({ margin: 0 }));
  });

  benchmark("fela + expand", () => {
    re.renderRule(() => ({ margin: 0 }));
  });

  benchmark("fela + our expand", () => {
    ro.renderRule(() => ({ margin: 0 }));
  });
});
