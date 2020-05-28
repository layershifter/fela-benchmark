import { r, re, ro } from "./pre";

suite("padding", () => {
  benchmark("fela", () => {
    r.renderRule(() => ({ padding: 0 }));
  });

  benchmark("fela + expand", () => {
    re.renderRule(() => ({ padding: 0 }));
  });

  benchmark("fela + our expand", () => {
    ro.renderRule(() => ({ padding: 0 }));
  });
});
