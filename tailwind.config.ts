import type { Config } from 'tailwindcss'
import icons from "rocketicons/tailwind";

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    icons
  ],
} satisfies Config

