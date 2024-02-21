import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from '@/theme';

export const metadata = {
  title: 'Raus - Vi lar ikke tidsklemma vinne!',
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
        <meta property="og:title" content="Raus - Vi lar ikke tidsklemma vinne!" />
        <meta property="og:image" content="https://www.raustfellesskap.no/RausThumbnail.png" />
        <meta
          property="og:description"
          content="La oss sammen jobbe for en fremtid der eldre får den oppmerksomheten de fortjener. Nå ønsker vi å tilby tjenester til eldre der helsesektoren ikke strekker til!"
        />
        <meta property="og:url" content="https://www.raustfellesskap.no" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="746" />
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
