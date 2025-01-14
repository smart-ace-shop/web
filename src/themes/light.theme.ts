import type { Defined } from '@xenopomp/advanced-types';
import type { Config } from 'tailwindcss';

type Theme = Defined<Defined<Config['theme']>['extend']>;

/* eslint-disable style/quote-props */

/**
 * This theme is **default**.
 */
export const lightTheme = {
  colors: {
    logo: {
      main: '#E20000',
      font: '#D4D0D0',
    },
    header: {
      'btn-back': '#353232',
      'notify-back': '#FF0000',
      icon: {
        inactive: '#908C8C',
        color: '#615F5F',
      },
    },
    app: {
      patch: '#FFFFFF',
      font: '#FFFFFF',
      bg: {
        primary: '#0E0E0E',
        secondary: '#252222',
        titrary: '#332E2E',
      },
    },
    'pages-main': {
      'link-btn': '#000000',
      'left-header': '#FFFFFF',
      card: {
        back: '#252323',
        header: '#FFFFFF',
        'content-font': '#FFFFFF',
      },
    },
    srv: {
      title: '#BFB9B9',
      border:
        'rgba(183.81250709295273 183.81250709295273 183.81250709295273 / 0.3499999940395355)',
      font: '#FFFFFF',
      icon: '#558BC2',
      star: '#E4CE0A',
      'btn-star-bg': '#E4E1E1',
      'spd-two': '#3CE02D',
      'spd-three': '#FFB700',
      'spd-four': '#FF8900',
      'spd-max': '#FF0000',
      sel: '#747C73',
      foot: {
        button: {
          font: '#FFFFFF',
          bg: '#644FE9',
        },
      },
    },
    overlay: {
      'section-bg': '#151615',
      backdrop:
        'rgba(117.93750151991844 113.02343800663948 113.02343800663948 / 0.800000011920929)',
      font: {
        inactive: '#000000',
        active: '#FFFFFF',
      },
    },
    blog: {
      'bg-primary': '#353333',
      font: {
        primary: '#FFFFFF',
        secondary: '#5E5C5C',
      },
    },
    ord: {
      font: {
        primary: '#FFFFFF',
        error: '#FF0000',
      },
    },
    inp: {
      bg: '#FFFFFF',
    },
    popup: {
      bg: '#FFFFFF',
      font: '#000000',
    },
    sets: {
      border:
        'rgba(150.0000062584877 151.00000619888306 155.00000596046448 / 0.2199999988079071)',
      font: {
        primary: '#FFFFFF',
        secondary: '#96979B',
      },
      confirm: {
        bg: '#00D4A1',
        font: '#000000',
      },
      reject: {
        bg: '#2B2A2A',
        font: '#FFFFFF',
      },
    },
  },
} satisfies Theme;

/* eslint-enable style/quote-props */
