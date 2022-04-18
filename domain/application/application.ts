import { albanianVoices } from "../data/artifacts/voices/albanian";
import { Albania } from "../data/countries/Albania/albania";
import { Bulgaria } from "../data/countries/Bulgaria/bulgaria";
import { Croatia } from "../data/countries/Croatia/croatia";
import { Greece } from "../data/countries/Greece/greece";
import { Italy } from "../data/countries/Italy/italy";
import { Montenegro } from "../data/countries/Montenegro/montenegro";
import { Turkey } from "../data/countries/Turkey/Turkey";
import { Ukraine } from "../data/countries/Ukraine/ukraine";
import { AlbanianDialects } from "../data/languages/Albanian/albanian";
import { Country } from "../entities/Country/Country";
import { Dialect } from "../entities/Dialect/Dialect";
import { Subdialect } from "../entities/SubDialect/SubDialect";

const EmptyDialect: Dialect = {
  id: "",
  languageId: "",
  name: "",
  description: "",
  colorIndicator: "",
  nrOfSpeakers: 0,
  subDialects: [],
  geoJson: "",
  area: {
    id: 0,
    name: "",
    description: "",
    colorIndicator: "",
    cities: [],
    villages: [],
  },
  cities: [],
  villages: [],
  countries: [],
};

const EmptySubDialect: Subdialect = {
  id: "",
  dialectId: "",
  name: "",
  description: "",
  colorIndicator: "",
  nrOfSpeakers: 0,
  variants: [],
  geoJson: "",
  area: {
    id: 0,
    name: "",
    description: "",
    colorIndicator: "",
    cities: [],
    villages: [],
  },
  cities: [],
  villages: [],
  countries: [],
};

export const getDialectVariantIds = (dialectIds: string[]) => {
  const variantIds: string[] = [];

  for (var dialect of AlbanianDialects) {
    if (dialectIds.includes(dialect.id)) {
      dialect.subDialects.forEach((sub) => {
        sub.variants.map((v) => {
          variantIds.push(v.id);
        });
      });
    }
  }

  return variantIds;
};

type DialectAndSubDialect = {
  dialect: Dialect;
  subDialect: Subdialect;
};
export const getDialectAndSubdialectFromVariant = (variantId: string): DialectAndSubDialect => {
  let response = { dialect: EmptyDialect, subDialect: EmptySubDialect };

  AlbanianDialects.forEach((dialect) => {
    dialect.subDialects.forEach((subDialect) => {
      subDialect.variants.forEach((variant) => {
        if (variant.id === variantId) {
          response = { subDialect, dialect };
        }
      });
    });
  });

  return response;
};

export const getSubDialectColorIndicatorFromVariant = (variantId: string): string => {
  const { subDialect } = getDialectAndSubdialectFromVariant(variantId);
  return subDialect.colorIndicator;
};

export const getCountries = () => {
  return [Albania, Bulgaria, Croatia, Greece, Italy, Montenegro, Turkey, Ukraine];
};

export const getNumberOfVariants = (subDialect: Subdialect) => {};

export const getNrOfRecordingsFromSubDialect = (subDialect: Subdialect) => {
  return albanianVoices.filter((v) => v.subDialect?.id === subDialect.id || v.variant?.subDialectId === subDialect.id)?.length || 0;
};
