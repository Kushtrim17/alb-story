import { Country } from "../Country/Country";
import { Dialect } from "../Dialect/Dialect";

export type Language = {
  id: string;
  name: string;
  // Indo European etc..
  origin: string;
  // some information about the language
  description: string;
  // south europe / balkan
  region: string;

  countries: Country[];
  areas: string[];
  dialects: Dialect[];
};
