import type { Config } from "tailwindcss";

/**
 * Kervo design tokens.
 * Kervo itself is quiet: cool paper, deep ink, one restrained blue.
 * Each product keeps its own colour on a dark "stage" (see .stage in globals.css).
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        kervo: "var(--blue)",
        stage: {
          DEFAULT: "var(--stage)",
          2: "var(--stage-2)",
          line: "var(--stage-line)",
          text: "var(--stage-text)",
          muted: "var(--stage-muted)",
        },
        mint: "var(--mint)",
      },
      fontFamily: {
        sans: [
          '"Schibsted Grotesk Variable"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      transitionTimingFunction: {
        out: "var(--ease)",
      },
    },
  },
  plugins: [],
};
export default config;
