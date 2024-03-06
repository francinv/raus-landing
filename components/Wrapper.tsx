'use client';

import { AppShell, Card, Divider, Title, Text, Container, Image } from '@mantine/core';
import { Montserrat } from 'next/font/google';

import { useMediaQuery } from '@mantine/hooks';
import { Header, Article, Register, ContactInformation, Footer } from '@/modules';

const montserrat = Montserrat({
  subsets: ['latin-ext'],
});

const Wrapper = () => {
  const isMobileScreen = useMediaQuery('(max-width: 768px)');

  return (
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
          <Container mb="xl" pt={isMobileScreen ? 128 : 0}>
            <Card shadow="lg" p="md" withBorder radius="lg">
              <Card.Section>
                <Image src="/RausCover.png" />
              </Card.Section>
              <Title order={2} className={montserrat.className} c="myGreen" mt="md">
                Trenger din nærstående hjelp?
              </Title>
              <Text my="sm">
                Vi tilbyr tjenester til eldre som bor hjemme, men ikke er i stand til å utføre
                gjøremål de har behov for å få gjort. Det kan være å måke oppkjørselen, gå en tur,
                kjøre på butikken for å handle eller få et hyggelig besøk.
              </Text>
            </Card>
          </Container>
          <Article />
          <Divider my="xl" />
          <Register />
          <ContactInformation />
        </AppShell.Main>
      </AppShell>
      <Footer />
    </>
  );
};

export default Wrapper;
