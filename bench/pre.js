import { createRenderer } from "fela";
import expandPlugin from "fela-plugin-expand-shorthand";
import { expandProperty } from "inline-style-expand-shorthand";

const handledCssProps = {
  // 'font', Oops, is not supported by inline-style-expand-shorthand
  padding: true,
  margin: true,
  border: true,
  borderWidth: true,
  borderStyle: true,
  borderColor: true,
  borderTop: true,
  borderRight: true,
  borderBottom: true,
  borderLeft: true,
  borderRadius: true,
  background: true,
  outline: true,
};

const ourExpand = () => {
  const expandCssShorthands = (styles) => {
    return Object.keys(styles).reduce((acc, cssPropertyName) => {
      const cssPropertyValue = styles[cssPropertyName];

      if (
        cssPropertyValue === null ||
        typeof cssPropertyValue === "undefined"
      ) {
        return { ...acc, [cssPropertyName]: cssPropertyValue };
      }

      if (handledCssProps[cssPropertyName]) {
        const expandedProps = expandProperty(cssPropertyName, cssPropertyValue);

        if (expandedProps) {
          return { ...acc, ...expandedProps };
        }
      }

      if (Array.isArray(cssPropertyValue)) {
        return { ...acc, [cssPropertyName]: cssPropertyValue };
      }

      if (typeof cssPropertyValue === "object") {
        return {
          ...acc,
          [cssPropertyName]: expandCssShorthands(cssPropertyValue),
        };
      }

      return { ...acc, [cssPropertyName]: cssPropertyValue };
    }, {});
  };

  return expandCssShorthands;
};

//

export const r = createRenderer();
export const re = createRenderer({ plugins: [expandPlugin()] });
export const ro = createRenderer({ plugins: [ourExpand()] });
