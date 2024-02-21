import { Anchor, Group, Image, SimpleGrid, Text } from '@mantine/core';
import { montserrat } from '@/theme';

const Footer = () => (
  <footer style={{ backgroundColor: '#BC8A71', height: 80, paddingLeft: 36, paddingRight: 36 }}>
    <Group justify="space-between" align="center" w="100%" h="100%">
      <SimpleGrid cols={2}>
        <Image src="/Ntnu.png" height={40} w="auto" fit="contain" alt="NTNU" />
        <Image src="/NSE.png" height={40} w="auto" fit="contain" alt="NSE" />
      </SimpleGrid>
      <Group justify="flex-end" gap="xs" align="center">
        <Text className={montserrat.className} c="white">
          E-post:
        </Text>
        <Anchor
          href="mailto:hei@raustfellesskap.no"
          c="white"
          underline="always"
          className={montserrat.className}
          size="sm"
        >
          hei@raustfellesskap.no
        </Anchor>
      </Group>
    </Group>
  </footer>
);

export default Footer;
