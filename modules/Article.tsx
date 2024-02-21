import { Container, Blockquote, Title, Image, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Paragraph } from '@/components';
import { montserrat } from '@/theme';

const Article = () => {
  const isMobileScreen = useMediaQuery('(max-width: 768px)');

  return (
    <Container id="article-section" size="lg" pt={isMobileScreen ? 128 : 0}>
      <Title order={1} className={montserrat.className} mb="sm" c="myGreen">
        Effektivitet trumfer menneskelig kontakt
      </Title>
      <Paragraph
        text="Som pårørende til en hjelpetrengende eldre forventer man gjerne at den lokale helsetjenesten tar ansvar for at den eldre får en meningsfull hverdag. Virkeligheten er langt mer kaotisk."
        wantBold
        c="myGreen"
      />
      <Paragraph text="En arbeidshverdag i eldreomsorgen domineres av en uendelig liste med gjøremål og et umenneskelig tidspress. De ansatte står på for å komme gjennom dagens gjøremål, men sliter likevel med å få det til å gå rundt." />
      <Paragraph text="Vi er Raus, et team på NTNUs Entreprenørskole som har dykket ned i problematikk knyttet til eldreomsorgen. Vi har tilegnet oss større forståelse for dagens omstendigheter gjennom å hospitere hos hjemmetjenester og sykehjem i Trondheim. Videre har vi gjennomført hundrevis av dybdeintervju med eldre, pårørende og pleiere, i tillegg til offentlige og private aktører." />
      <Paragraph
        text="Det vi har observert har rystet vår forståelse av eldreomsorgen i dag - der effektivitet trumfer menneskelig kontakt."
        wantBold
        c="myGreen"
      />
      <Paragraph text="Virkeligheten som har møtt oss er preget av dårlig tid, stress og en glemt sårbar gruppe. Da vi var på hospitering ble flere av besøkene redusert ned til tre minutter. Tre minutter - den korte tiden mellom et raskt “hei og hadet”, en realitet der man så vidt rekker å ta av og på støttestrømpene før man er på vei ut døren igjen. Dette er særlig frustrerende for de eldre." />
      <Paragraph text="Det er en vesentlig forskjell mellom hva den eldre har krav på og hva han eller hun har behov for. Menneskelig tilstedeværelse, det viktigste aspektet ved omsorg, forsvinner." />
      <Paragraph
        text="I 2040 vil det være dobbelt så mange i alderen 80 år og over. Ifølge SSB vurderer seks av ti 80-åringer sin egen helse som god eller svært god. Dette er en positiv utvikling, men det betyr også at kapasitetskrisen vi står overfor i dag er barnemat sammenlignet med hva som vil møte oss de neste årene. Hvem skal ta ansvar for dem som blir tvunget til å bo lenger hjemme?"
        wantBold
        c="myGreen"
      />
      <SimpleGrid
        cols={{
          xs: 1,
          sm: 2,
        }}
        mt="lg"
      >
        <Image src="/RausTeam.jpeg" />
        <Blockquote
          color="myBeige"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          På Raus arbeider vi dag og natt for å finne løsninger som kan bidra til å lette på det
          kommende trykket. Vi vet at veien videre ikke vil være enkel, men vi nekter å la
          tidsklemma vinne!
        </Blockquote>
      </SimpleGrid>
    </Container>
  );
};

export default Article;
