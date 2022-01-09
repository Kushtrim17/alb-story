import { Area } from "../Area/Area";
import { City } from "../City/City";
import { Country } from "../Country/Country";
import { Village } from "../Village/Village";

export type Variant = {
  id: number;
  subDialectId: number;
  name: string;
  description: string;
  colorIndicator: string;
  nrOfSpeakers: number;
  //an area in the map
  geoJson: string;
  area: Area;
  cities: City[];
  villages: Village[];
  countries: Country[];
};
