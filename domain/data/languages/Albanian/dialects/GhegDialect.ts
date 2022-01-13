import { Dialect } from "../../../../entities/Dialect/Dialect";
import { Subdialect } from "../../../../entities/SubDialect/SubDialect";
import { Variant } from "../../../../entities/Variant/Variant";

const northernGhegSubDialectWesternVariant: Variant = {
  id: 1,
  subDialectId: 1,
  name: "Western variant",
  description: `Spoken in regions to the west of a vertical line from the Montenegrin-Albanian border initially down the boundary between the Prefecture of Shkodra and the Prefecture of Kukës, including Theth and Shala in Dukagjin and areas west thereof such as Shkodra, Lezha, Malësia e Madhe and Montenegro`,
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

const northernGhegSubDialectEasternVariant: Variant = {
  id: 2,
  subDialectId: 1,
  name: "Eastern variant",
  description: `Spoken in regions to the east of a vertical line from the Montenegrin-Albanian border initially down the boundary between the Prefecture of Shkodra and the Prefecture of Kukës, including Nikaj-Merturi and Puka, and areas east thereof such as Gashi, Tropoja, Malësia e Gjakovës, Has, Kukës, Kosovo and Presheva.`,
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

export const northernGhegSubDialect: Subdialect = {
  id: 1,
  dialectId: 1,
  name: "Northern Gheg subdialect",
  description: `Spoken in most Albanian-speaking regions north of the Mat river. These include Ulqin [Ulcinj], Kraja and Podgorica in Montenegro, the Shkodra region, Lezha, Malësia e Madhe, Dukagjin, Puka, Mirdita, Plava, Malësia e Gjakovës, Luma, Has, Kosovo and Presheva [Preševo].`,
  colorIndicator: "",
  nrOfSpeakers: 0,
  variants: [northernGhegSubDialectWesternVariant, northernGhegSubDialectEasternVariant],
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

export const southernGhegSubDialectCentralVariant: Variant = {
  id: 3,
  subDialectId: 2,
  name: "Central Variant",
  description: `Spoken in the interior basin of the Mat river, extending eastwards to and beyond the Black Drin river, including Mat, part of Mirdita, Lura, Luma, Peshkopia and western Macedonia (the left bank of the Black Drin around Struga, Dibra, Kërçova [Kičevo], Tetova, Gostivar, Skopje and Kumanova), as well as Kruja and Fushë Kruja.`,
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

export const southernGhegSubDialectSouthernVariant: Variant = {
  id: 4,
  subDialectId: 2,
  name: "Southern variant",
  description: `Spoken in most of the coastal region from the mouth of the Mat or Ishëm rivers to the mouth of the Shkumbin river, including Durrës, Tirana, and Kavaja, as well as inland areas such as the Tirana mountain range, Martanesh and Çermenika, Elbasan and the valley of the Shkumbin river.`,
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

export const southernGhegSubDialect: Subdialect = {
  id: 2,
  dialectId: 1,
  name: "Southern Gheg subdialect",
  description: `Spoken in northern central Albania south of the Mat river and north of the Shkumbin river, including Mat, Lura, Peshkopia and most of western Macedonia (Dibra to Skopje and Kumanova), as well as Kruja, Tirana and Elbasan.`,
  colorIndicator: "",
  nrOfSpeakers: 0,
  variants: [southernGhegSubDialectCentralVariant, southernGhegSubDialectSouthernVariant],
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

export const GhegDialect: Dialect = {
  id: 1,
  name: "Gheg",
  description: `Spoken in most of Albania north of the Shkumbin river, as well as in Kosovo, Montenegro, Serbia, most of the western part of the Republic of Macedonia, and Arbanasi near Zadar in Croatia.`,
  languageId: 1,
  colorIndicator: "",
  nrOfSpeakers: 0,
  subDialects: [northernGhegSubDialect, southernGhegSubDialect],
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
