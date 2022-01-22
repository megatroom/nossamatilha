import * as NextImage from "next/image";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";
import Theme, { defaultTheme } from "../styles/Theme";

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={defaultTheme}>
      <Theme>
        <Story {...context} />
      </Theme>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
