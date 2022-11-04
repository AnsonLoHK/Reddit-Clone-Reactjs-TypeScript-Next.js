// Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

// Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    100: "#ff3c00",
  },
  fonts: {
    heading: `'Heading Font Name', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "gray.200",
      },
    },
  },
  components: {
    // Button,
  },
  layerStyles: {
    base: {
      bg: "gray.50",
      border: "2px solid",
      borderColor: "gray.500",
    },
    selected: {
      bg: "teal.500",
      color: "teal.700",
      borderColor: "orange.500",
    },
  },
});
