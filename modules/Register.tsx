import {
  Anchor,
  Autocomplete,
  Button,
  Checkbox,
  Container,
  Divider,
  MultiSelect,
  SimpleGrid,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMemo } from 'react';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconExclamationMark } from '@tabler/icons-react';
import { montserrat } from '@/theme';
import { MUNICIPALITIES, TASKS } from '@/constants';
import { SelectDeal } from '@/components';
import { RegisterForm } from '@/types';
import { generateGoogleSheetUrl } from '@/util';

const Register = () => {
  const form = useForm<RegisterForm>({
    initialValues: {
      municipality: '',
      tasks: [],
      otherTasks: '',
      name: '',
      phone: '',
      email: '',
      consent: true,
      amountOfTasks: 1,
    },
  });

  const hasOtherTasks = useMemo(() => form.values.tasks.includes('Annet'), [form.values.tasks]);

  return (
    <Container id="register-section" size="lg">
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            await fetch(generateGoogleSheetUrl(values), {
              method: 'POST',
              mode: 'no-cors',
            });

            form.reset();

            notifications.show({
              autoClose: 2000,
              title: 'Takk for din registrering!',
              message: 'Du vil bli kontaktet av en frivillig så snart som mulig.',
              color: 'green',
              icon: <IconCheck />,
              className: montserrat.className,
            });
          } catch (error) {
            notifications.show({
              autoClose: 2000,
              title: 'Noe gikk galt!',
              message: 'Prøv igjen ved en senere anledning.',
              color: 'red',
              icon: <IconExclamationMark />,
              className: montserrat.className,
            });
          }
        })}
      >
        <Title order={2} className={montserrat.className}>
          Trenger din nærstående hjelp?
        </Title>
        <Text my="sm">
          Raus tilbyr oppgavedeling til eldre som bor hjemme, men ikke er i stand til å utføre
          gjøremål de har behov for å få gjort. Det kan være å måke oppkjørselen, gå en tur, kjøre
          på butikken for å handle eller rydde kjøleskapet.
        </Text>
        <Text>
          Dersom du er pårørende til noen som trenger en hjelpende hånd - registrer deg her!
        </Text>
        <Divider my="sm" />
        <Title order={4} className={montserrat.className}>
          Velg ønsket hjelp
        </Title>
        <SelectDeal onChange={(number) => form.setFieldValue('amountOfTasks', number)} />
        <Title order={4} className={montserrat.className}>
          Informasjon
        </Title>
        <Text size="sm" c="gray">
          For å tilby best mulig hjelp, trenger vi litt informasjon om hvilken type hjelp dere
          trenger.
        </Text>
        <SimpleGrid
          my="md"
          cols={{
            xs: 1,
            md: 2,
          }}
        >
          <Autocomplete
            label="Hvor er det behov for assistanse?"
            data={MUNICIPALITIES}
            required
            classNames={{
              input: montserrat.className,
              dropdown: montserrat.className,
            }}
            placeholder="Velg kommune"
            {...form.getInputProps('municipality')}
          />
          <div>
            <MultiSelect
              label="Hva trenger dere hjelp til?"
              data={TASKS}
              required
              classNames={{
                input: montserrat.className,
                dropdown: montserrat.className,
              }}
              placeholder="Velg oppgaver"
              searchable
              {...form.getInputProps('tasks')}
            />
            {hasOtherTasks && (
              <TextInput
                label="Spesifiser andre oppgaver"
                placeholder="Skriv inn oppgaver"
                classNames={{
                  input: montserrat.className,
                }}
                {...form.getInputProps('otherTasks')}
              />
            )}
          </div>
        </SimpleGrid>
        <Divider my="xs" />
        <Title order={6} className={montserrat.className}>
          Din kontaktinformasjon
        </Title>

        <SimpleGrid cols={{ xs: 1, sm: 2, md: 3 }}>
          <TextInput
            label="Navn"
            placeholder="Ola Nordmann"
            required
            classNames={{
              input: montserrat.className,
            }}
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Telefonnummer"
            placeholder="123 45 678"
            required
            classNames={{
              input: montserrat.className,
            }}
            {...form.getInputProps('phone')}
          />
          <TextInput
            label="E-post"
            placeholder="hei@raustfellesskap.no"
            required
            classNames={{
              input: montserrat.className,
            }}
            {...form.getInputProps('email')}
          />
        </SimpleGrid>
        <SimpleGrid cols={2} my="sm">
          <Checkbox
            label={
              <>
                Jeg samtykker til at Raus kan lagre og behandle mine personopplysninger for å tilby
                meg hjelp.{' '}
                <Anchor href="/personvern" target="_blank" rel="noopener noreferrer" size="md">
                  Les mer
                </Anchor>
              </>
            }
            defaultChecked
            {...form.getInputProps('consent')}
          />
          <Button type="submit" variant="filled">
            Registrer
          </Button>
        </SimpleGrid>
      </form>
    </Container>
  );
};

export default Register;
