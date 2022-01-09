import { Country } from "../Country/Country";

export type City = {
  id: number;
  name: string;
  description: string;
  country: Country;
};
