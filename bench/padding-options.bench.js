import { r, re } from "./pre";

function padding(value) {
  return {
    paddingLeft: value,
    paddingRight: value,
    paddingBottom: value,
    paddingTop: value,
  };
}

suite("padding-options", () => {
  benchmark("raw", () => {
    r.renderRule(() => ({ padding: '0' }));
  });

  benchmark("expand", () => {
    re.renderRule(() => ({ padding: '0' }));
  });

  benchmark("function", () => {
    r.renderRule(() => ({ ...padding('0') }));
  });

  benchmark("values", () => {
    r.renderRule(() => ({
      paddingLeft: '0',
      paddingRight: '0',
      paddingBottom: '0',
      paddingTop: '0',
    }));
  });
});
