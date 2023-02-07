/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
        handlee: ['Handlee'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bgColor: {
          light: '#ffffff',
          DEFAULT: '#ffffff',
          dark: '#35363a',
        },
        txtColor: {
          light: '#333333',
          DEFAULT: '#333333',
          dark: '#ffffff',
          gray: '#6b7280',
        },
        primary: {
          light: '#2dd4bf',
          dark: '#fcd34d',
        },
      },
      height: {
        screen: ['100vh', '100dvh'],
      },
      minHeight: {
        screen: ['100vh', '100dvh'],
      },
      maxHeight: {
        screen: ['100vh', '100dvh'],
      },
    },
  },
  plugins: [],
};
