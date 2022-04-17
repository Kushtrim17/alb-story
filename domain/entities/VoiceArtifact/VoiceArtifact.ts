import { Area } from "../Area/Area";
import { City } from "../City/City";
import { Country } from "../Country/Country";
import { Dialect } from "../Dialect/Dialect";
import { Subdialect } from "../SubDialect/SubDialect";
import { Variant } from "../Variant/Variant";
import { Village } from "../Village/Village";

export type VoiceArtifact = {
  id: number;
  dialect?: Dialect;
  variant?: Variant;
  subDialect?: Subdialect;
  region?: Area;
  country?: Country;
  city?: City;
  village?: Village;
  speakerName: string;
  speakerDescription: string;
  subject: string;
  recorderdOn: Date | string;
  recordedBy: string[];
  duration: number;
  coordinates: number[];
  artifactUrl: string;
};
