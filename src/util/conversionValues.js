/** weight */
const OUNCE_TO_GRAM = 28.35;
const GRAM_TO_OUNCE = 0.04;
const KG_TO_POUNDLBS = 2.20;
const POUNDLBS_TO_KG = 0.45;

/** liquid volume */
const GALLON_TO_LITRE = 3.79;
const LITRE_TO_GALLON = 0.26;
//TODO ounce

/** distances */
const INCH_TO_CM = 2.54;
const CM_TO_INCH = 0.39;
const MILE_TO_KM = 1.61;
const KM_TO_MILE = 0.62;
const FOOT_TO_CM = 30.48;
const CM_TO_FOOT = 0.03;
const YARD_TO_METER = 0.91;
const METER_TO_YARD = 1.09;

/**temperature */
//TODO (npm install) mathjs for evaling formula (with string literals from user... maan i dont know)
const FAHR_TO_CELSIUS_FORMULA = `(${value} - 32)/1.8`;
const CELSIUS_TO_FAHR_FORMULA = `(${value} * 1.8) + 32`;