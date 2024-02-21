import { Anchor, Flex, Group, Image, SimpleGrid, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { montserrat } from '@/theme';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <footer
      style={{
        backgroundColor: '#BC8A71',
        height: isMobile ? 100 : 80,
        paddingLeft: 36,
        paddingRight: 36,
      }}
    >
      <Flex
        justify={isMobile ? 'center' : 'space-between'}
        align="center"
        w="100%"
        h="100%"
        direction={isMobile ? 'column' : 'row'}
      >
        <SimpleGrid cols={2}>
          <Image src="/Ntnu.png" height={isMobile ? 30 : 40} w="auto" fit="contain" alt="NTNU" />
          <Image src="/NSE.png" height={isMobile ? 30 : 40} w="auto" fit="contain" alt="NSE" />
        </SimpleGrid>
        <Flex align="center" justify="center" mt="sm">
          <Text className={montserrat.className} c="white">
            E-post:
          </Text>
          <Anchor
            href="mailto:hei@raustfellesskap.no"
            c="white"
            underline="always"
            className={montserrat.className}
            size="sm"
            ml="sm"
          >
            hei@raustfellesskap.no
          </Anchor>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
