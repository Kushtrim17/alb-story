import { Dialect } from "../../../../entities/Dialect/Dialect";
import { Subdialect } from "../../../../entities/SubDialect/SubDialect";
import { Variant } from "../../../../entities/Variant/Variant";

const northernToskSubDialectWesternVariant: Variant = {
  id: 0,
  subDialectId: 2,
  name: "Western Variant",
  description: `Spoken in the regions of Myzeqeja, Mallakastra, Berat, Fier, Skrapar, Tepelena on right (eastern) side of Vjosa, Përmet and Vlora, including the area to the north and northeast of the town of Vlora.`,
  colorIndicator: "",
  nrOfSpeakers: 0,
  geoJson: "",
  area: {
    id: 0,
    name: "",
    description: "",
    colorIndicator: "",
    cities: [],
    villages: [],
  },
  cities: [],
  villages: [],
  countries: [],
};

const northernToskSubDialectEasternVariant: Variant = {
  id: 0,
  subDialectId: 2,
  name: "Eastern Variant",
  description: `poken in the regions of Pogradec, Korça, Kolonja and Devoll, as well as the southwestern part of the Republic of Macedonia (the right bank of the Black Drin around Struga, Ohrid, Prespa and Monastir [Bitola]).`,
  colorIndicator: "",
  nrOfSpeakers: 0,
  geoJson: "",
  area: {
    id: 0,
    name: "",
    description: "",
    colorIndicator: "",
    cities: [],
    villages: [],
  },
  cities: [],
  villages: [],
  countries: [],
};

const northernToskSubDialect: Subdialect = {
  id: 3,
  dialectId: 3,
  name: "Northern Tosk Subdialect",
  description: `Spoken in most of Albania south of the Shkumbin river, with the exception of southern coastal areas on the left (southwestern) side of the Vjosa river. On the coast, the southern border of this area is just south of the town of Vlora.`,
  colorIndicator: "",
  nrOfSpeakers: 0,
  variants: [northernToskSubDialectWesternVariant, northernToskSubDialectEasternVariant],
  geoJson: "",
  area: {
    id: 0,
    name: "",
    description: "",
    colorIndicator: "",
    cities: [],
    villages: [],
  },
  cities: [],
  villages: [],
  countries: [],
};

const southernToskSubDialectLabVariant: Variant = {
  id: 0,
  subDialectId: 4,
  name: "Lab Variant",
  description: `Spoken in the Laberia region, being Kurvelesh and Himara down to the Shalës and Pavlle rivers, including Delvina and Gjirokastra.`,
  colorIndicator: "",
  nrOfSpeakers: 0,
  geoJson: "",
  area: {
    id: 0,
    name: "",
    description: "",
    colorIndicator: "",
    cities: [],
    villages: [],
  },
  cities: [],
  villages: [],
  countries: [],
};

const southernToskSubDialectChamVariant: Variant = {
  id: 0,
  subDialectId: 4,
  name: "Cham Variant",
  description: `Spoken in the Albanian part of the Chameria [Çamëria] region south of Shalës and Pavlle rivers, and in the Greek part of Chameria sporadically down to Preveza.`,
  colorIndicator: "",
  nrOfSpeakers: 0,
  geoJson: "",
  area: {
    id: 0,
    name: "",
    description: "",
    colorIndicator: "",
    cities: [],
    villages: [],
  },
  cities: [],
  villages: [],
  countries: [],
};

const southernToskSubDialect: Subdialect = {
  id: 4,
  dialectId: 3,
  name: "Southern Tosk Subdialect",
  description: `Spoken in coastal regions south of the town of Vlora and extending downinto Greece.`,
  colorIndicator: "",
  nrOfSpeakers: 0,
  variants: [southernToskSubDialectLabVariant, southernToskSubDialectChamVariant],
  geoJson: "",
  area: {
    id: 0,
    name: "",
    description: "",
    colorIndicator: "",
    cities: [],
    villages: [],
  },
  cities: [],
  villages: [],
  countries: [],
};

const arvaniticToskSubDialect: Subdialect = {
  id: 5,
  dialectId: 3,
  name: "Arvanitic Tosk Subdialect",
  description: `Spoken traditionally in about 300 villages of central Greece, in particular in Attica, Boeotia, southern Euboia, the northeastern Peloponnese around Corinth, the islands of the Sardonic Gulf, including Salamis, northern Andros, as well as some other parts of the Peloponnese and Phthiotis. This archaic dialect is moribund, though there may still be from 50,000 to 250,000 speakers, mostly older people.`,
  colorIndicator: "",
  nrOfSpeakers: 0,
  variants: [],
  geoJson: "",
  area: {
    id: 0,
    name: "",
    description: "",
    colorIndicator: "",
    cities: [],
    villages: [],
  },
  cities: [],
  villages: [],
  countries: [],
};

const italoAlbanianToskSubDialect: Subdialect = {
  id: 6,
  dialectId: 3,
  name: "Italo-Albanian Tosk Subdialect",
  description: `This archaic variant of Albanian is spoken by about 90,000 people in southern Italy. Speakers are to be found, usually in remote mountain villages, in the regions of Calabria, Molise, Puglia, Basilicata, Campagnia, Abruzzi and Sicily.`,
  colorIndicator: "",
  nrOfSpeakers: 0,
  variants: [],
  geoJson: "",
  area: {
    id: 0,
    name: "",
    description: "",
    colorIndicator: "",
    cities: [],
    villages: [],
  },
  cities: [],
  villages: [],
  countries: [],
};

export const ToskDialect: Dialect = {
  id: 7,
  name: "Tosk",
  description: `Spoken in most of Albania south of the Shkumbin river and into Greece, as well as in the traditional Albanian diaspora settlements in Italy, Greece, Bulgaria and the Ukraine.`,
  languageId: 1,
  colorIndicator: "",
  nrOfSpeakers: 0,
  subDialects: [northernToskSubDialect, southernToskSubDialect, arvaniticToskSubDialect, italoAlbanianToskSubDialect],
  geoJson: "",
  area: {
    id: 0,
    name: "",
    description: "",
    colorIndicator: "",
    cities: [],
    villages: [],
  },
  cities: [],
  villages: [],
  countries: [],
};
