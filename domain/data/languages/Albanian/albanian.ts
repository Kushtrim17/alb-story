import { Dialect } from "../../../entities/Dialect/Dialect";
import { Language } from "../../../entities/Language/Language";
import { GhegDialect } from "./dialects/GhegDialect";
import { ToskDialect } from "./dialects/ToskDialect";
import { TransitionalDialect } from "./dialects/TransitionalDialect";

export const AlbanianDialects: Dialect[] = [GhegDialect, TransitionalDialect, ToskDialect];

export const AlbanianLanguage: Language = {
  id: 1,
  name: "Albanian",
  description:
    "Albanian is a language of the extensive Indo-European family and is thus related to a certain degree to almost all other languages of Europe. There are two basic, universally accepted dialect forms of modern Albanian: northern Albanian or Gheg, that is spoken north of the Shkumbin river flowing through Elbasan in central Albania, and southern Albanian or Tosk, that is spoken south of the Shkumbin river.",
  origin: "Indo-European",
  region: "",
  countries: [],
  areas: [],
  dialects: AlbanianDialects,
};
