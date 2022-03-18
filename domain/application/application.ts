import { AlbanianDialects } from "../data/languages/Albanian/albanian";
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
