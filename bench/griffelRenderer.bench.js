import { createDOMRenderer } from "@griffel/core";
import * as css from "../griffel";

suite("griffelRenderer", () => {
  benchmark(
    "1500 rules",
    () => {
      const r = createDOMRenderer();

      r.insertCSSRules({ d: css.rulesAll });
      document.head.removeChild(r.styleElements.d);
    },
    { minSamples: 20 }
  );

  benchmark(
    "1500 rules (unsafe)",
    () => {
      const r = createDOMRenderer();

      r.insertCSSRules({ d: css.rulesUnsafe });
      document.head.removeChild(r.styleElements.d);
    },
    { minSamples: 20 }
  );

  benchmark(
    "200 rules",
    () => {
      const r = createDOMRenderer();

      r.insertCSSRules({ d: css.rules200 });
      document.head.removeChild(r.styleElements.d);
    },
    { minSamples: 20 }
  );

  benchmark(
    "50 * 4 rules",
    function () {
      const r = createDOMRenderer();

      r.insertCSSRules({ d: css.rules501 });
      r.insertCSSRules({ d: css.rules502 });
      r.insertCSSRules({ d: css.rules503 });
      r.insertCSSRules({ d: css.rules504 });

      document.head.removeChild(r.styleElements.d);
    },
    { minSamples: 20 }
  );

  benchmark(
    "Button + ToggleButton",
    () => {
      const r = createDOMRenderer();

      css.button.forEach((rules) => {
        r.insertCSSRules(rules);
      });

      document.head.removeChild(r.styleElements.d);
      document.head.removeChild(r.styleElements.t);
      document.head.removeChild(r.styleElements.h);
      document.head.removeChild(r.styleElements.i);
    },
    { minSamples: 20 }
  );
});
