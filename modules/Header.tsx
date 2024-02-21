import { Button, Flex, Image } from '@mantine/core';

const Header = () => (
  <Flex justify="space-between" align="center" py="sm" px="lg" h={{ xs: 60, sm: 80 }}>
    <Image src="/Logo.png" height={85} />
    <Button component="a" variant="filled" href="#register-section">
      Registrer deg
    </Button>
  </Flex>
);

export default Header;
