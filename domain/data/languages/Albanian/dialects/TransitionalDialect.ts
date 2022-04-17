import { Dialect } from "../../../../entities/Dialect/Dialect";
import { Subdialect } from "../../../../entities/SubDialect/SubDialect";

export const TransitionalSubDialect: Subdialect = {
  id: "transitional-subdialect",
  dialectId: "transitional-dialect",
  name: "Transitional",
  description:
    "Spoken in a ten to twenty kilometre horizontal belt along the Shkumbin river valley, mostly on the left (south) side of the river, including the northern Myzeqe plain, Dumreja, Shpat, Polis and Qukës.",
  colorIndicator: "#7B1FA2",
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

export const TransitionalDialect: Dialect = {
  id: "transitional-dialect",
  name: "Transitional",
  description: `Spoken in a ten to twenty kilometre horizontal belt along the Shkumbin river valley, mostly on the left (south) side of the river, including the northern Myzeqe plain, Dumreja, Shpat, Polis and Qukës.`,
  languageId: "albanian",
  colorIndicator: "#7B1FA2",
  nrOfSpeakers: 0,
  subDialects: [],
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
