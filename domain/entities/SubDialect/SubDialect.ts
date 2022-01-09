import { Area } from "../Area/Area";
import { City } from "../City/City";
import { Country } from "../Country/Country";
import { Variant } from "../Variant/Variant";
import { Village } from "../Village/Village";

export type Subdialect = {
  id: number;
  subDialectId: number;
  name: string;
  description: string;
  colorIndicator: string;
  nrOfSpeakers: number;
  variants: Variant[];
  //an area in the map
  geoJson: string;
  area: Area;
  cities: City[];
  villages: Village[];
  countries: Country[];
};
