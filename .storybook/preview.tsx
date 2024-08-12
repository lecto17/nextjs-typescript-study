import React from "react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import { createGlobalStyle } from "styled-components";
import * as NextImage from "next/image";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const GlobalStyles = createGlobalStyle`
html, body, textarea {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont,Segoe UI,Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif ;
}

  * {
    box-sizing: border-box;
  }

  a {    
    text-decoration: none;
    transition: .25s;
    color: #000;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => {
    if (typeof props.src === "string") {
      return (
        <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
      );
    }
    return <OriginalNextImage {...props} unoptimized />;
  },
});

export default preview;
