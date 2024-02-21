'use client';

import { createTheme } from '@mantine/core';
import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin-ext'],
});

export const theme = createTheme({
  fontFamily: montserrat.className,
  colors: {
    myGreen: [
      '#e0e8db', // Lightest shade
      '#c2d1b8',
      '#a4bb95',
      '#87a472',
      '#698d50',
      '#314528', // Base color
      '#2b3d23',
      '#26351e',
      '#202d19',
      '#1b2414', // Darkest shade
    ],
    myBeige: [
      '#f3e9e5',
      '#e8d4cb',
      '#ddbeb1',
      '#d2a997',
      '#c7937e',
      '#BC8A71', // Base color
      '#a67e65',
      '#916f5a',
      '#7b6150',
      '#665246',
    ],
    myGray: [
      '#e6ebea',
      '#cdd7d5',
      '#b3c2c0',
      '#9aaeab',
      '#819996',
      '#7B9A89', // Base color
      '#6f8b7b',
      '#627c6e',
      '#566e60',
      '#4a6053',
    ],
  },
  primaryColor: 'myGreen',
  primaryShade: 5, // Using the base color as the primary shade
});
