import {
  createDOMRenderer,
  makeStyles,
  mergeClasses,
} from "@fluentui/make-styles";

import { mergeClasses as attempt1 } from "./impl1";
import { mergeClasses as attempt2 } from "./impl2";

const renderer = createDOMRenderer();
const styles = makeStyles({
  root: {
    color: "red",
    backgroundColor: "red",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "15px",
    paddingTop: "15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginBottom: "15px",
    marginTop: "15px",

    ":hover": {
      color: "red",
      backgroundColor: "red",
      paddingLeft: "15px",
      paddingRight: "15px",
      paddingBottom: "15px",
      paddingTop: "15px",
      marginLeft: "15px",
      marginRight: "15px",
      marginBottom: "15px",
      marginTop: "15px",
    },
  },
  rootCopy: {
    color: "red",
    backgroundColor: "red",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "15px",
    paddingTop: "15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginBottom: "15px",
    marginTop: "15px",
  },
  focus: {
    ":focus": {
      color: "red",
      backgroundColor: "red",
      paddingLeft: "15px",
      paddingRight: "15px",
      paddingBottom: "15px",
      paddingTop: "15px",
      marginLeft: "15px",
      marginRight: "15px",
      marginBottom: "15px",
      marginTop: "15px",
    },
  },
})({ dir: "ltr", renderer });

suite("mergeClasses", () => {
  benchmark(
    "fast-cache-gen",
    () => {
      attempt1(
        "ui-button",
        "ui-flex",
        "red",
        styles.root,
        styles.focus,
        styles.rootCopy
      );
      attempt1(styles.root, styles.rootCopy);
      attempt1(styles.root, styles.focus);
    },
    { minSamples: 20 }
  );

  benchmark(
    "original",
    () => {
      mergeClasses(
        "ui-button",
        "ui-flex",
        "red",
        styles.root,
        styles.focus,
        styles.rootCopy
      );
      mergeClasses(styles.root, styles.rootCopy);
      mergeClasses(styles.root, styles.focus);
    },
    { minSamples: 20 }
  );

  // benchmark(
  //   "ab",
  //   () => {
  //     attempt2(
  //       "ui-button",
  //       "ui-flex",
  //       "red",
  //       styles.root,
  //       styles.focus,
  //       styles.rootCopy
  //     );
  //     attempt2(styles.root, styles.rootCopy);
  //     attempt2(styles.root, styles.focus);
  //   },
  //   { minSamples: 20 }
  // );
});
