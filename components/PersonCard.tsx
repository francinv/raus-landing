import { ActionIcon, Card, Group, Image, Text } from '@mantine/core';
import { IconBrandLinkedin, IconMail, IconPhone } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

interface PersonCardProps {
  name: string;
  background: string;
  email: string;
  phone: string;
  linkedin: string;
  img: string;
}

const PersonCard = ({ name, background, email, phone, linkedin, img }: PersonCardProps) => {
  const isMobileSreen = useMediaQuery('(max-width: 768px)');

  return (
    <Card shadow="xs" padding="md" radius="md">
      <Card.Section>
        <Image src={img} alt={name} height={isMobileSreen ? 550 : 400} radius="md" />
      </Card.Section>
      <Text fw={500} mt="sm" c="myGreen">
        {name}
      </Text>
      <Text fw={300} size="sm" c="dimmed">
        {background}
      </Text>
      <Group justify="space-around" mt="sm">
        <ActionIcon component="a" href={`mailto:${email}`} variant="transparent" color="myGray">
          <IconMail />
        </ActionIcon>
        <ActionIcon component="a" href={`tel:${phone}`} variant="transparent" color="myGray">
          <IconPhone />
        </ActionIcon>
        <ActionIcon component="a" href={linkedin} variant="transparent" color="myGray">
          <IconBrandLinkedin />
        </ActionIcon>
      </Group>
    </Card>
  );
};

export default PersonCard;
