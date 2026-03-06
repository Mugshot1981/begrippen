const subjects = [
  {
    id: "geschiedenis",
    title: "Geschiedenis"
  }
];

const chapters = [
  {
    id: "his-h1",
    subjectId: "geschiedenis",
    title: "Hoofdstuk 1 – Staatsinrichting van Nederland 1848 - nu"
  },
  {
    id: "his-h2",
    subjectId: "geschiedenis",
    title: "Hoofdstuk 2 – De Eerste Wereldoorlog 1914 - 1918"
  },
  {
    id: "his-h3",
    subjectId: "geschiedenis",
    title: "Hoofdstuk 3 – Het Interbellum 1918 - 1939"
  },
  {
    id: "his-h4",
    subjectId: "geschiedenis",
    title: "Hoofdstuk 4 – De Tweede Wereldoorlog 1939-1945 en dekolonisatie"
  },
  {
    id: "his-h5",
    subjectId: "geschiedenis",
    title: "Hoofdstuk 5 – De wereld na 1945"
  }
];

const items = [
  {
    id: "his-h1-001",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "grondwet",
    answer: "Een document waarin de grondrechten van alle burgers en de regels over het bestuur van het land staan."
  },
  {
    id: "his-h1-002",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "grondrechten",
    answer: "Basisrechten van elke burger."
  },
  {
    id: "his-h1-003",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "constitutionele monarchie",
    answer: "Een bestuursvorm waarbij de macht van de koning is vastgelegd in een grondwet."
  },
  {
    id: "his-h1-004",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "regering",
    answer: "De koning en de ministers samen."
  },
  {
    id: "his-h1-005",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "parlement",
    answer: "Een volksvertegenwoordiging; in Nederland de Eerste en Tweede Kamer samen."
  },
  {
    id: "his-h1-006",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "staatshoofd",
    answer: "Persoon die symbool staat voor de hoogste macht in een staat, zoals een koning of president."
  },
  {
    id: "his-h1-007",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "onschendbaar",
    answer: "De koning(in) is niet zelf politiek verantwoordelijk voor wat hij of zij zegt of doet."
  },
  {
    id: "his-h1-008",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "ministeriële verantwoordelijkheid",
    answer: "Ministers zijn verantwoordelijk voor wat de koning zegt of doet en voor hun eigen werk."
  },
  {
    id: "his-h1-009",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "parlementair stelsel",
    answer: "Een bestuursvorm waarbij het parlement de macht heeft."
  },
  {
    id: "his-h1-010",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "districtenstelsel",
    answer: "Een systeem waarbij elk gebied een Kamerlid kiest; wie in een district de meeste stemmen krijgt, komt in de Kamer."
  },
  {
    id: "his-h1-011",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "Luxemburgse kwestie",
    answer: "Een ruzie over Luxemburg tussen de koning en het parlement in 1866-1867."
  },
  {
    id: "his-h1-012",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "liberalisme",
    answer: "Politieke stroming die zoveel mogelijk vrijheid wil voor burgers en bedrijven."
  },
  {
    id: "his-h1-013",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "socialisme",
    answer: "Politieke stroming die vindt dat geld en bezit eerlijker verdeeld moeten worden en dat de overheid armen moet helpen."
  },
  {
    id: "his-h1-014",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "confessionalisme",
    answer: "Politieke stroming waarbij politieke ideeën gebaseerd zijn op het geloof."
  },
  {
    id: "his-h1-015",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "censuskiesrecht",
    answer: "Kiesrecht waarbij alleen mensen die een bepaald bedrag aan belasting betalen mogen stemmen."
  },
  {
    id: "his-h1-016",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "algemeen kiesrecht",
    answer: "Het recht voor iedereen vanaf een bepaalde leeftijd om te stemmen."
  },
  {
    id: "his-h1-017",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "industriële revolutie",
    answer: "De grote verandering door de komst van fabrieken en machines."
  },
  {
    id: "his-h1-018",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "verstedelijking",
    answer: "Het ontstaan en groeien van steden doordat mensen van het platteland naar de stad trekken."
  },
  {
    id: "his-h1-019",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "sociale kwestie",
    answer: "Het probleem van slechte woon- en werkomstandigheden van arbeiders door de industriële revolutie."
  },
  {
    id: "his-h1-020",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "sociale wetten",
    answer: "Wetten die mensen beschermen tegen gevolgen van armoede, ziekte, ouderdom en werkloosheid."
  },
  {
    id: "his-h1-021",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "schoolstrijd",
    answer: "Politieke ruzie over de vraag wie het bijzonder onderwijs moest betalen."
  },
  {
    id: "his-h1-022",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "emancipatie",
    answer: "Het streven naar gelijke rechten."
  },
  {
    id: "his-h1-023",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "discriminatie",
    answer: "Het ongelijk behandelen van een groep of persoon vanwege bijvoorbeeld geloof, geslacht of afkomst."
  },
  {
    id: "his-h1-024",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "verzuiling",
    answer: "De verdeling van de samenleving in groepen met eigen politieke en religieuze overtuigingen."
  },
  {
    id: "his-h1-025",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "caoutchouc-artikel",
    answer: "Grondwetsartikel uit 1887 dat kiesrecht gaf aan alle mannen die aan bepaalde eisen voldeden."
  },
  {
    id: "his-h1-026",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "feminisme",
    answer: "Een beweging die opkomt voor gelijke rechten voor vrouwen."
  },
  {
    id: "his-h1-027",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "eerste feministische golf",
    answer: "Periode van ongeveer 1870 tot 1920 waarin steeds meer vrouwen actie voerden voor gelijke rechten."
  },
  {
    id: "his-h1-028",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "vrouwenkiesrecht",
    answer: "Het recht van vrouwen om te stemmen en gekozen te worden."
  },
  {
    id: "his-h1-029",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "Pacificatie van 1917",
    answer: "Naam voor de grondwetswijziging van 1917 waarbij socialisten, confessionelen en een deel van de liberalen een compromis sloten."
  },
  {
    id: "his-h1-030",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "financiële gelijkstelling van openbaar en bijzonder onderwijs",
    answer: "Grondwetswijziging in 1917 waardoor de overheid ook het bijzonder onderwijs betaalde."
  },
  {
    id: "his-h1-031",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "evenredige vertegenwoordiging",
    answer: "Een systeem waarbij Kamerzetels worden verdeeld op basis van het percentage stemmen dat een partij krijgt."
  },
  {
    id: "his-h1-032",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "parlementaire democratie",
    answer: "Een bestuursvorm waarbij de macht ligt bij een parlement dat door burgers wordt gekozen."
  },
  {
    id: "his-h1-033",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "referendum",
    answer: "Een stemming waarbij burgers direct over een wet of maatregel mogen stemmen."
  },
  {
    id: "his-h1-034",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "coalitie",
    answer: "Een groep partijen in de Tweede Kamer die samen de regering vormen."
  },
  {
    id: "his-h1-035",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "oppositie",
    answer: "Partijen in de Tweede Kamer die niet in de regering zitten."
  },
  {
    id: "his-h1-036",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "recht van budget",
    answer: "Het recht om de uitgaven en inkomsten van de staat te controleren en goed te keuren."
  },
  {
    id: "his-h1-037",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "recht van interpellatie",
    answer: "Het recht van Kamerleden om ministers te ondervragen."
  },
  {
    id: "his-h1-038",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "recht van enquête",
    answer: "Het recht om een onderzoek naar een bepaalde zaak in te stellen."
  },
  {
    id: "his-h1-039",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "recht van initiatief",
    answer: "Het recht van Kamerleden om zelf wetsvoorstellen in te dienen."
  },
  {
    id: "his-h1-040",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "recht van amendement",
    answer: "Het recht van Kamerleden om wetsvoorstellen te wijzigen."
  },
  {
    id: "his-h1-041",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "klassieke grondrechten",
    answer: "Grondrechten die burgers beschermen tegen de macht van de overheid."
  },
  {
    id: "his-h1-042",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "sociale grondrechten",
    answer: "Grondrechten die burgers bescherming door de overheid bieden."
  },
  {
    id: "his-h1-043",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "rechtsstaat",
    answer: "Een staat waarin burgers beschermd zijn tegen onrechtmatig optreden van de overheid."
  },
  {
    id: "his-h1-044",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "uitvoerende macht",
    answer: "De macht die wetten uitvoert."
  },
  {
    id: "his-h1-045",
    subjectId: "geschiedenis",
    chapterId: "his-h1",
    type: "begrip",
    prompt: "wetgevende macht",
    answer: "De macht die wetten maakt."
  },
{
  id: "his-h1-046",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "rechterlijke macht",
  answer: "De macht die wetten handhaaft en mensen straft die de wet overtreden."
},

{
  id: "his-h2-001",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "nationalisme",
  answer: "Een gevoel van trots voor je eigen land, volk en cultuur."
},
{
  id: "his-h2-002",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "modern imperialisme",
  answer: "Het idee bij Europese landen in de 19e eeuw dat zij land moesten veroveren in Azië en Afrika om zo een groot rijk op te bouwen."
},
{
  id: "his-h2-003",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "militarisme",
  answer: "Het idee dat oorlog iets moois is en dat een land zo kan laten zien hoe sterk het is."
},
{
  id: "his-h2-004",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "wapenwedloop",
  answer: "Een soort wedstrijd waarbij landen proberen om de meeste en beste wapens te bezitten."
},
{
  id: "his-h2-005",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "bondgenootschap",
  answer: "Een afspraak tussen twee of meer landen om elkaar te helpen bij een oorlog."
},
{
  id: "his-h2-006",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "centralen",
  answer: "Het bondgenootschap tussen Duitsland, Oostenrijk-Hongarije en het Turkse Rijk."
},
{
  id: "his-h2-007",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "geallieerden (tijdens de Eerste Wereldoorlog)",
  answer: "Het bondgenootschap tussen Rusland, Frankrijk en Groot-Brittannië."
},
{
  id: "his-h2-008",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "tweefrontenoorlog",
  answer: "Een oorlog waarbij een land op twee fronten tegelijkertijd moet vechten."
},
{
  id: "his-h2-009",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "Von Schlieffenplan",
  answer: "Een plan van de Duitse generaal Von Schlieffen dat een tweefrontenoorlog voor Duitsland moest voorkomen."
},
{
  id: "his-h2-010",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "loopgraven",
  answer: "Diepe greppels die beschutting geven tegen beschietingen."
},
{
  id: "his-h2-011",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "totale oorlog",
  answer: "Een oorlog waarbij de hele samenleving wordt ingezet om de oorlog te kunnen winnen."
},
{
  id: "his-h2-012",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "propaganda",
  answer: "Reclame voor politieke ideeën, met als doel zoveel mogelijk mensen te overtuigen."
},
{
  id: "his-h2-013",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "vijandbeeld",
  answer: "Het negatief afbeelden en beschrijven van de vijand."
},
{
  id: "his-h2-014",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "censuur",
  answer: "De regering controleert de pers en houdt dus toezicht op alle berichten die via massamedia naar buiten worden gebracht."
},
{
  id: "his-h2-015",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "neutraal",
  answer: "Als een land zich in geval van oorlog niet aansluit bij een van de strijdende partijen."
},
{
  id: "his-h2-016",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "handelsbelemmeringen",
  answer: "Alle problemen die handeldrijven moeilijk maken."
},
{
  id: "his-h2-017",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "distributiestelsel",
  answer: "Een stelsel waarin je alleen producten kunt kopen met bonkaarten."
},
{
  id: "his-h2-018",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "Dodendraad",
  answer: "Een hek met prikkeldraad dat onder hoge elektrische spanning stond, door Duitsland gebouwd op de grens tussen Nederland en België."
},
{
  id: "his-h2-019",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "communisme",
  answer: "Een politieke stroming. Communisten streven naar een samenleving waarin iedereen gelijk is."
},
{
  id: "his-h2-020",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "Russische Revolutie",
  answer: "De periode die begon met de opstand in februari 1917 en eindigde toen de communisten in oktober van dat jaar de macht grepen."
},
{
  id: "his-h2-021",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "onbeperkte duikbootoorlog",
  answer: "Een manier van vechten waarbij Duitsland vanaf zijn onderzeeërs vijandelijke én neutrale schepen beschiet."
},
{
  id: "his-h2-022",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "wapenstilstand",
  answer: "Een afspraak tussen de oorlogvoerende partijen om op te houden met vechten."
},
{
  id: "his-h2-023",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "Verdrag van Versailles",
  answer: "Het vredesverdrag tussen Duitsland en de geallieerden na afloop van de Eerste Wereldoorlog."
},
{
  id: "his-h2-024",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "Volkenbond",
  answer: "Een internationale organisatie die een nieuwe oorlog moest voorkomen."
}
];
