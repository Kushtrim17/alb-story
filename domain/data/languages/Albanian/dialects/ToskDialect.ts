import { Dialect } from "../../../../entities/Dialect/Dialect";
import { Subdialect } from "../../../../entities/SubDialect/SubDialect";
import { Variant } from "../../../../entities/Variant/Variant";

export const EmptyVariantTosk: Variant = {
  id: "-1",
  subDialectId: "",
  name: "",
  description: "",
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

export const NorthernToskSubDialectWesternVariant: Variant = {
  id: "northern-tosk-sub-dialect-western-variant",
  subDialectId: "northern-tosk-sub-dialect",
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

export const NorthernToskSubDialectEasternVariant: Variant = {
  id: "northern-tosk-sub-dialect-eastern-variant",
  subDialectId: "northern-tosk-sub-dialect",
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

export const NorthernToskSubDialect: Subdialect = {
  id: "northern-tosk-sub-dialect",
  dialectId: "tosk-dialect",
  name: "Northern Tosk",
  description: `Spoken in most of Albania south of the Shkumbin river, with the exception of southern coastal areas on the left (southwestern) side of the Vjosa river. On the coast, the southern border of this area is just south of the town of Vlora.`,
  colorIndicator: "#512da8",
  nrOfSpeakers: 0,
  variants: [NorthernToskSubDialectWesternVariant, NorthernToskSubDialectEasternVariant, EmptyVariantTosk],
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

export const SouthernToskSubDialectLabVariant: Variant = {
  id: "southern-tosk-sub-dialect-lab-variant",
  subDialectId: "southern-tosk-sub-dialect",
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

export const SouthernToskSubDialectChamVariant: Variant = {
  id: "southern-tosk-sub-dialect-cham-variant",
  subDialectId: "southern-tosk-sub-dialect",
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

export const SouthernToskSubDialect: Subdialect = {
  id: "southern-tosk-sub-dialect",
  dialectId: "tosk-dialect",
  name: "Southern Tosk",
  description: `Spoken in coastal regions south of the town of Vlora and extending downinto Greece.`,
  colorIndicator: "#4527a0",
  nrOfSpeakers: 0,
  variants: [SouthernToskSubDialectLabVariant, SouthernToskSubDialectChamVariant],
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

export const ArvaniticToskVariant: Variant = {
  id: "arvanitic-tosk-variant",
  subDialectId: "arvanitic-tosk-sub-dialect",
  name: "Arvanitic Tosk",
  description: "",
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

export const ArvaniticToskSubDialect: Subdialect = {
  id: "arvanitic-tosk-sub-dialect",
  dialectId: "tosk-dialect",
  name: "Arvanitic Tosk",
  description: `Spoken traditionally in about 300 villages of central Greece, in particular in Attica, Boeotia, southern Euboia, the northeastern Peloponnese around Corinth, the islands of the Sardonic Gulf, including Salamis, northern Andros, as well as some other parts of the Peloponnese and Phthiotis. This archaic dialect is moribund, though there may still be from 50,000 to 250,000 speakers, mostly older people.`,
  colorIndicator: "#5e35b1",
  nrOfSpeakers: 0,
  variants: [ArvaniticToskVariant],
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

export const ItaloAlbanianToskSubDialect: Subdialect = {
  id: "italo-albanian-tosk-sub-dialect",
  dialectId: "tosk-dialect",
  name: "Italo-Albanian Tosk",
  description: `This archaic variant of Albanian is spoken by about 90,000 people in southern Italy. Speakers are to be found, usually in remote mountain villages, in the regions of Calabria, Molise, Puglia, Basilicata, Campagnia, Abruzzi and Sicily.`,
  colorIndicator: "#673ab7",
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
  id: "tosk-dialect",
  name: "Tosk",
  description: `Spoken in most of Albania south of the Shkumbin river and into Greece, as well as in the traditional Albanian diaspora settlements in Italy, Greece, Bulgaria and the Ukraine.`,
  languageId: "albanian",
  colorIndicator: "#311b92",
  nrOfSpeakers: 0,
  subDialects: [NorthernToskSubDialect, SouthernToskSubDialect, ArvaniticToskSubDialect, ItaloAlbanianToskSubDialect],
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
