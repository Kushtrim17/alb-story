import { Area } from "../Area/Area";
import { City } from "../City/City";

export type Village = {
  id: number;
  name: string;
  description: string;
  city: City;
  region: Area;
};
