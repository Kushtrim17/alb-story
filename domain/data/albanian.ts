import { Dialect } from "../entities/Dialect/Dialect";
import { Language } from "../entities/Language/Language";

export const GhegDialect: Dialect = {
  id: 1,
  name: "Gheg",
  description: "",
  languageId: 1,
  colorIndicator: "",
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

export const TransitionalDialect: Dialect = {
  id: 2,
  name: "Transitional",
  description: "",
  languageId: 1,
  colorIndicator: "",
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

export const ToskDialect: Dialect = {
  id: 3,
  name: "Tosk",
  description: "",
  languageId: 1,
  colorIndicator: "",
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

export const AlbanianDialects: Dialect[] = [GhegDialect, TransitionalDialect, ToskDialect];

export const AlbanianLanguage: Language = {
  id: 1,
  name: "Albanian",
  description:
    "Albanian is a language of the extensive Indo-European family and is thus related to a certain degree to almost all other languages of Europe. The Indo-European character of the language was first recognized in 1854 by the German linguist Franz Bopp (1791-1867). At the same time, Albanian shows no particularly close historical affinity to any other language or language group within the Indo-European family, i.e. it forms a language group of its own.",
  origin: "Indo-European",
  region: "",
  countries: [],
  areas: [],
  dialects: AlbanianDialects,
};
