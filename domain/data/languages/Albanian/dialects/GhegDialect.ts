import { Dialect } from "../../../../entities/Dialect/Dialect";
import { Subdialect } from "../../../../entities/SubDialect/SubDialect";
import { Variant } from "../../../../entities/Variant/Variant";

export const EmptyVariantGheg: Variant = {
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

export const NorthernGhegSubDialectWesternVariant: Variant = {
  id: "northern-gheg-sub-dialect-western-variant",
  subDialectId: "northern-gheg-sub-dialect",
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

export const NorthernGhegSubDialectEasternVariant: Variant = {
  id: "northern-gheg-sub-dialect-eastern-variant",
  subDialectId: "northern-gheg-sub-dialect",
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

export const NorthernGhegSubDialect: Subdialect = {
  id: "northern-gheg-sub-dialect",
  dialectId: "gheg-dialect",
  name: "Northern Gheg",
  description: `Spoken in most Albanian-speaking regions north of the Mat river. These include Ulqin [Ulcinj], Kraja and Podgorica in Montenegro, the Shkodra region, Lezha, Malësia e Madhe, Dukagjin, Puka, Mirdita, Plava, Malësia e Gjakovës, Luma, Has, Kosovo and Presheva [Preševo].`,
  colorIndicator: "#ad1457",
  nrOfSpeakers: 0,
  variants: [NorthernGhegSubDialectWesternVariant, NorthernGhegSubDialectEasternVariant, EmptyVariantGheg],
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

export const SouthernGhegSubDialectCentralVariant: Variant = {
  id: "southern-gheg-sub-dialect-central-variant",
  subDialectId: "southern-gheg-sub-dialect",
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

export const SouthernGhegSubDialectSouthernVariant: Variant = {
  id: "southern-gheg-sub-dialect-southern-variant",
  subDialectId: "southern-gheg-sub-dialect",
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

export const SouthernGhegSubDialect: Subdialect = {
  id: "southern-gheg-sub-dialect",
  dialectId: "gheg-dialect",
  name: "Southern Gheg",
  description: `Spoken in northern central Albania south of the Mat river and north of the Shkumbin river, including Mat, Lura, Peshkopia and most of western Macedonia (Dibra to Skopje and Kumanova), as well as Kruja, Tirana and Elbasan.`,
  colorIndicator: "#c2185b",
  nrOfSpeakers: 0,
  variants: [SouthernGhegSubDialectCentralVariant, SouthernGhegSubDialectSouthernVariant],
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
  id: "gheg-dialect",
  name: "Gheg",
  description: `Spoken in most of Albania north of the Shkumbin river, as well as in Kosovo, Montenegro, Serbia, most of the western part of the Republic of Macedonia, and Arbanasi near Zadar in Croatia.`,
  languageId: "albania",
  colorIndicator: "#880e4f",
  nrOfSpeakers: 0,
  subDialects: [NorthernGhegSubDialect, SouthernGhegSubDialect],
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
