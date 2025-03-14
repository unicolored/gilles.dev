const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

const colors = {
  bkg: 'rgba(var(--color-bkg) / 1)',
  // content: 'rgba(var(--color-content) / 1)',
  moon: '#939598',
  moonLight: '#ADBECF',
  night: '#2a3035',
  space: '#151515',
  sky: '#274d74',
  skyLight: '#0dcaf0',
  sun: '#c49620',
  mars: '#e23033',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {
      colors: colors,
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      typography: ({ theme }) => ({
        solar: {
          css: {
            '--tw-prose-headings': theme('colors.sky'),
            '--tw-prose-body': theme('colors.space'),
            // '--tw-prose-lead': theme('colors.pink[700]'),
            // '--tw-prose-links': theme('colors.pink[900]'),
            // '--tw-prose-bold': theme('colors.pink[900]'),
            // '--tw-prose-counters': theme('colors.pink[600]'),
            // '--tw-prose-bullets': theme('colors.pink[400]'),
            // '--tw-prose-hr': theme('colors.pink[300]'),
            // '--tw-prose-quotes': theme('colors.pink[900]'),
            // '--tw-prose-quote-borders': theme('colors.pink[300]'),
            // '--tw-prose-captions': theme('colors.pink[700]'),
            // '--tw-prose-code': theme('colors.pink[900]'),
            // '--tw-prose-pre-code': theme('colors.pink[100]'),
            // '--tw-prose-pre-bg': theme('colors.pink[900]'),
            // '--tw-prose-th-borders': theme('colors.pink[300]'),
            // '--tw-prose-td-borders': theme('colors.pink[200]'),
            // '--tw-prose-invert-body': theme('colors.pink[200]'),
            // '--tw-prose-invert-headings': theme('colors.white'),
            // '--tw-prose-invert-lead': theme('colors.pink[300]'),
            // '--tw-prose-invert-links': theme('colors.white'),
            // '--tw-prose-invert-bold': theme('colors.white'),
            // '--tw-prose-invert-counters': theme('colors.pink[400]'),
            // '--tw-prose-invert-bullets': theme('colors.pink[600]'),
            // '--tw-prose-invert-hr': theme('colors.pink[700]'),
            // '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            // '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            // '--tw-prose-invert-captions': theme('colors.pink[400]'),
            // '--tw-prose-invert-code': theme('colors.white'),
            // '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            // '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            // '--tw-prose-invert-td-borders': theme('colors.pink[700]')
          },
        },
        invert: {
          css: {
            '--tw-prose-headings': theme('colors.skyLight'),
            '--tw-prose-body': theme('colors.moonLight'),
          },
        },
        // dark: {
        //   css: {
        //     color: theme('colors.gray.300'),
        //     '[class~="lead"]': { color: theme('colors.gray.400') },
        //     a: { color: theme('colors.gray.100') },
        //     strong: { color: theme('colors.gray.100') },
        //     'ul > li::before': { backgroundColor: theme('colors.gray.700') },
        //     hr: { borderColor: theme('colors.gray.800') },
        //     blockquote: {
        //       color: theme('colors.gray.100'),
        //       borderLeftColor: theme('colors.gray.800'),
        //     },
        //     h1: { color: theme('colors.gray.100') },
        //     h2: { color: theme('colors.gray.100') },
        //     h3: { color: theme('colors.gray.100') },
        //     h4: { color: theme('colors.gray.100') },
        //     code: { color: theme('colors.gray.100') },
        //     'a code': { color: theme('colors.gray.100') },
        //     pre: {
        //       color: theme('colors.gray.200'),
        //       backgroundColor: theme('colors.gray.800'),
        //     },
        //     thead: {
        //       color: theme('colors.gray.100'),
        //       borderBottomColor: theme('colors.gray.700'),
        //     },
        //     'tbody tr': { borderBottomColor: theme('colors.gray.800') },
        //   },
        // },
      }),
    },
  },
  // variants: {
  //   extend: { typography: ['dark'] },
  // },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          // ':root': {
          //   'background-color': colors.moonLight,
          // },
          primary: colors.sky,
          secondary: colors.skyLight,
          accent: colors.sun,
          neutral: colors.night,
          // 'base-100': colors.night,
          // 'base-content': colors.night,

          '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          // ':root': {
          //   'background-color': colors.moonLight,
          // },
          // bodyBg: colors.sun,
          primary: colors.skyLight,
          secondary: colors.mars,
          accent: colors.sun,
          neutral: colors.moonLight,
          // 'base-100': colors.moon,
          // 'base-content': colors.sky,

          '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
};
