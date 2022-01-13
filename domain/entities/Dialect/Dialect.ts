import { Area } from "../Area/Area";
import { City } from "../City/City";
import { Country } from "../Country/Country";
import { Subdialect } from "../SubDialect/SubDialect";
import { Village } from "../Village/Village";

export type Dialect = {
  id: number;
  languageId: number;
  name: string;
  description: string;
  colorIndicator: string;
  nrOfSpeakers: number;
  subDialects: Subdialect[];
  //an area in the map
  geoJson: string;
  area: Area;
  cities: City[];
  villages: Village[];
  countries: Country[];
};
