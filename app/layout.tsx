import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from '@/theme';

export const metadata = {
  title: 'Raus - Vi hjelper deg og dine nærmeste.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="nb">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
