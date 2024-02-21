import { Container, SimpleGrid, Title } from '@mantine/core';
import { montserrat } from '@/theme';
import PersonCard from '@/components/PersonCard';

const ContactInformation = () => (
  <Container id="contact-information-section" size="lg" mt={64}>
    <Title order={2} className={montserrat.className}>
      Hvem er vi?
    </Title>
    <SimpleGrid
      cols={{
        xs: 2,
        sm: 4,
      }}
      my="md"
    >
      <PersonCard
        name="Lisa Johansen"
        background="Forretningsutvikling"
        email="lisa@raustfellesskap.no"
        phone="97582443"
        linkedin="https://www.linkedin.com/in/lisa-nyland-johansen-353969172/"
        img="/LisaJohansen.jpg"
      />
      <PersonCard
        name="Renate Thorstensen"
        background="Sosialantropologi"
        email="renate@raustfellesskap.no"
        phone="93813493"
        linkedin="https://www.linkedin.com/in/renate-thorstensen-339556289/"
        img="/RenateThorstensen.jpg"
      />
      <PersonCard
        name="Francin Vincent"
        background="Informatikk"
        email="francin@raustfellesskap.no"
        phone="46629490"
        linkedin="https://www.linkedin.com/in/francinvincent/"
        img="/FrancinVincent.jpg"
      />
      <PersonCard
        name="Nora Haldorsen Grønås"
        background="PR, kommunikasjon og media"
        email="nora@raustfellesskap.no"
        phone="91809271"
        linkedin="https://www.linkedin.com/in/nora-haldorsen-grønås-94071b22a/"
        img="/NoraGronas.jpg"
      />
    </SimpleGrid>
  </Container>
);

export default ContactInformation;
