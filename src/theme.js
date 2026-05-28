// theme/index.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

  fonts: {
    heading: "DM Sans Variable, sans-serif",
    body: "DM Sans Variable, sans-serif",
  },

  textStyles: {
    h1: {
      fontSize: ["2.4rem", "3rem"],
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: ["2rem", "2.4rem"],
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: ["1.6rem", "1.8rem"],
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h4: {
      fontSize: ["1.3rem", "1.4rem"],
      fontWeight: 600,
      lineHeight: 1.3,
    },
    bodyLg: {
      fontSize: "1.1rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.65,
    },
    label: {
      fontSize: "0.85rem",
      fontWeight: 500,
      letterSpacing: "0.02em",
    },
  },

  colors: {
    brand: {
      50: "#f8f3ef",
      100: "#e9ded4",
      200: "#d8c3b3",
      300: "#c7a892",
      400: "#b68d72",
      500: "#a57352",
      600: "#8a5c3f",
      700: "#6f4630",
      800: "#543120",
      900: "#3a1e14",
    },

    olive: {
      50: "#f4f6f1",
      100: "#e3e8d9",
      200: "#c7d0b3",
      300: "#aab88d",
      400: "#8ea067",
      500: "#73874e",
      600: "#5b6b3d",
      700: "#44502d",
      800: "#2d351d",
      900: "#171c0e",
    },
  },

  semanticTokens: {
    colors: {
      bg: {
        default: "#0f0f0d",
        _dark: "#0f0f0d",
      },
      surface: {
        default: "rgba(255,255,255,0.04)",
        _dark: "rgba(255,255,255,0.04)",
      },
      subtleText: {
        default: "#d8d3cc",
        _dark: "#d8d3cc",
      },
      text: {
        default: "#f2eee9",
        _dark: "#f2eee9",
      },
      muted: {
        default: "#b8b3ac",
        _dark: "#b8b3ac",
      },
      accent: {
        default: "brand.500",
        _dark: "brand.500",
      },
      highlight: {
        default: "brand.300",
        _dark: "brand.300",
      },
      success: {
        default: "olive.400",
        _dark: "olive.400",
      },
    },
  },

  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "bg",
        color: "text",
      },
    },
  },
});

export default theme;