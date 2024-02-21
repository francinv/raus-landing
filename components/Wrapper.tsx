'use client';

import { AppShell, Divider } from '@mantine/core';
import { Montserrat } from 'next/font/google';

import { Header, Article, Register, ContactInformation, Footer } from '@/modules';

const montserrat = Montserrat({
  subsets: ['latin-ext'],
});

const Wrapper = () => (
  <>
    <AppShell
      header={{
        height: {
          xs: 60,
          sm: 80,
        },
      }}
      padding="md"
      className={montserrat.className}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Register />
        <Divider my="xl" />
        <Article />
        <ContactInformation />
      </AppShell.Main>
    </AppShell>
    <Footer />
  </>
);

export default Wrapper;
