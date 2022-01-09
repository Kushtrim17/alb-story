import { City } from "../City/City";
import { Village } from "../Village/Village";

export type Area = {
  id: number;
  name: string;
  description: string;
  colorIndicator: string;
  cities: City[];
  villages: Village[];
};
