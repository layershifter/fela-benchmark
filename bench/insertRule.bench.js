import "../griffel";

suite("insertRule", () => {
  benchmark(
    "1500 rules",
    function () {
      window.cssRules.all.forEach((rule) => {
        this.sheet.insertRule(rule, this.sheet.cssRules.length);
      });
    },
    {
      setup() {
        const style = document.createElement("style");
        document.head.appendChild(style);

        this.style = style;
        this.sheet = style.sheet;
      },
      teardown() {
        if (this.style) {
          document.head.removeChild(this.style);
        }

        this.style = null;
        this.sheet = null;
      },
    }
  );

  benchmark(
    "1500 rules with try/catch",
    function () {
      window.cssRules.all.forEach((rule) => {
        try {
          this.sheet.insertRule(rule, this.sheet.cssRules.length);
        } catch (e) {
          console.error(`There was a problem inserting the following rule:`, e);
        }
      });
    },
    {
      setup() {
        const style = document.createElement("style");
        document.head.appendChild(style);

        this.style = style;
        this.sheet = style.sheet;
      },
      teardown() {
        if (this.style) {
          document.head.removeChild(this.style);
        }

        this.style = null;
        this.sheet = null;
      },
    }
  );

  benchmark(
    "200 rules",
    function () {
      window.cssRules["200"].forEach((rule) => {
        this.sheet.insertRule(rule, this.sheet.cssRules.length);
      });
    },
    {
      setup() {
        const style = document.createElement("style");
        document.head.appendChild(style);

        this.sheet = style.sheet;
      },
      teardown() {
        if (this.style) {
          document.head.removeChild(this.style);
        }

        this.style = null;
        this.sheet = null;
      },
    }
  );
});
