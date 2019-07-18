export let mixed = {
  default: '${path} je neplatné',
  required: '${path} je povinné',
  oneOf: '${path} musí být jedna z následujících možností: ${values}',
  notOneOf: '${path} nesmí být jedna z následujících možností: ${values}',
};

export let string = {
  length: '${path} musí obsahovat přesně ${length} znaků',
  min: '${path} musí obsahovat minimálně ${min} znaků',
  max: '${path} musí obsahovat maximálně ${max} znaků',
  matches: '${path} musí splňovat pravidlo: "${regex}"',
  email: '${path} musí být e-mail adresa',
  url: '${path} musí být URL adresa',
  trim: '${path} nesmí obsahovat mezery',
  lowercase: '${path} musí obsahovat jen malá písmena',
  uppercase: '${path} musí obsahovat jen velká písmena',
};

export let number = {
  min: '${path} musí být větší nebo rovno ${min}',
  max: '${path} musí být menší nebo rovno ${max}',
  lessThan: '${path} musí být menší než ${less}',
  moreThan: '${path} musí být větší než ${more}',
  notEqual: '${path} nesmí se rovnat "${notEqual}"',
  positive: '${path} musí být kladné číslo',
  negative: '${path} musí být záporné číslo',
  integer: '${path} musí být celé číslo',
};

export let date = {
  min: '${path} musí být po ${min}',
  max: '${path} musí být před ${max}',
};

export let boolean = {};

export let object = {
  noUnknown: '${path}-pole nesmí obsahovat nespecifikované klíče',
};

export let array = {
  min: '${path}-pole musí obsahovat alespoň ${min} položky',
  max: '${path}-pole musí obsahova maximálně ${max} položky',
};

export default {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
};
