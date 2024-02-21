'use client';

import { ActionIcon, Badge, Card, Group, Text } from '@mantine/core';
import { useEffect, useMemo, useState } from 'react';
import { IconMinus, IconPlus } from '@tabler/icons-react';

interface SelectDealProps {
  onChange: (value: number) => void;
}
const SelectDeal = ({ onChange }: SelectDealProps) => {
  const [currentValue, setCurrentValue] = useState<number>(1);
  const currentAmount = useMemo(() => currentValue * 249, [currentValue]);

  useEffect(() => {
    onChange(currentValue);
  }, [currentValue]);

  const onReduce = () => {
    if (currentValue > 1) {
      setCurrentValue(currentValue - 1);
    }
  };

  const onIncrease = () => {
    if (currentValue < 10) {
      setCurrentValue(currentValue + 1);
    }
  };

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      w={{ xs: '80%', sm: '60%', md: '50%' }}
      my="lg"
      mx="auto"
      withBorder
    >
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} size="xl">
          Pris per oppdrag:
        </Text>
        <Badge color="myGray" variant="filled" size="xl">
          249 kr
        </Badge>
      </Group>
      <Text size="sm" c="dimmed">
        Velg antall oppdrag du ønsker i måneden. Et oppdrag kan være alt fra å måke oppkjørselen til
        å gå en tur.
      </Text>
      <Group mt="xl" justify="space-around" align="center">
        <ActionIcon onClick={onReduce} variant="filled" size="lg" disabled={currentValue === 1}>
          <IconMinus width="60%" height="60%" />
        </ActionIcon>
        <Text size="xl" fw={500}>
          {currentValue}
        </Text>
        <ActionIcon onClick={onIncrease} variant="filled" size="lg" disabled={currentValue === 10}>
          <IconPlus width="60%" height="60%" />
        </ActionIcon>
      </Group>
      <Group mt="md" justify="center" align="center">
        <Text fw={500} size="xl">
          Totalt:
        </Text>
        <Text size="xl">{currentAmount} kr</Text>
      </Group>
    </Card>
  );
};

export default SelectDeal;
