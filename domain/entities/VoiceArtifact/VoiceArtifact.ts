import { Area } from "../Area/Area";
import { City } from "../City/City";
import { Country } from "../Country/Country";
import { Subdialect } from "../SubDialect/SubDialect";
import { Variant } from "../Variant/Variant";
import { Village } from "../Village/Village";

export type VoiceArtifact = {
  id: number;
  variant?: Variant;
  subDialect?: Subdialect;
  region?: Area;
  country?: Country;
  city?: City;
  village?: Village;
  speakerName: string;
  speakerDescription: string;
  subject: string;
  recorderdOn: Date;
  recordedBy: string[];
  duration: number;
  coordinates: number[];
  artifactUrl: string;
};
