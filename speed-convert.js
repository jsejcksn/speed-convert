var length = {
  cm: {
    name: 'centimeters',
    cm: 1,
    ft: 0.01 / 0.3048,
    km: 0.00001,
    m: 0.01,
    mi: 0.01 / 1609.344,
    yd: 0.01 / 0.9144
  },
  ft: {
    name: 'feet',
    cm: 30.48,
    ft: 1,
    km: 0.0003048,
    m: 0.3048,
    mi: 1 / 5280,
    yd: 1 / 3
  },
  km: {
    name: 'kilometers',
    cm: 100000,
    ft: 1000 / 0.3048,
    km: 1,
    m: 1000,
    mi: 1000 / 1609.344,
    yd: 1000 / 0.9144
  },
  m: {
    name: 'meters',
    cm: 100,
    ft: 1 / 0.3048,
    km: 0.001,
    m: 1,
    mi: 1 / 1609.344,
    yd: 1 / 0.9144
  },
  mi: {
    name: 'miles',
    cm: 160934.4,
    ft: 5280,
    km: 1.609344,
    m: 1609.344,
    mi: 1,
    yd: 1760
  },
  yd: {
    name: 'yards',
    cm: 91.44,
    ft: 3,
    km: 0.0009144,
    m: 0.9144,
    mi: 1 / 1760,
    yd: 1
  }
};

var time = {
  ms: {
    name: 'milliseconds',
    ms: 1,
    s: 1 / 1000,
    m: 1 / 1000 / 60,
    h: 1 / 1000 / 60 / 60,
    d: 1 / 1000 / 60 / 60 / 24,
    w: 1 / 1000 / 60 / 60 / 24 / 7,
    y: 1 / 1000 / 60 / 60 / 24 / 365.25
  },
  s: {
    name: 'seconds',
    ms: 1000,
    s: 1,
    m: 1 / 60,
    h: 1 / 60 / 60,
    d: 1 / 60 / 60 / 24,
    w: 1 / 60 / 60 / 24 / 7,
    y: 1 / 60 / 60 / 24 / 365.25
  },
  m: {
    name: 'minutes',
    ms: 60 * 1000,
    s: 60,
    m: 1,
    h: 1 / 60,
    d: 1 / 60 / 24,
    w: 1 / 60 / 24 / 7,
    y: 1 / 60 / 24 / 365.25
  },
  h: {
    name: 'hours',
    ms: 60 * 60 * 1000,
    s: 60 * 60,
    m: 60,
    h: 1,
    d: 1 / 24,
    w: 1 / 24 / 7,
    y: 1 / 24 / 365.25
  },
  d: {
    name: 'days',
    ms: 24 * 60 * 60 * 1000,
    s: 24 * 60 * 60,
    m: 24 * 60,
    h: 24,
    d: 1,
    w: 1 / 7,
    y: 1 / 365.25
  },
  w: {
    name: 'weeks',
    ms: 7 * 24 * 60 * 60 * 1000,
    s: 7 * 24 * 60 * 60,
    m: 7 * 24 * 60,
    h: 7 * 24,
    d: 7,
    w: 1,
    y: 1 / 365.25 / 7
  },
  y: {
    name: 'years',
    ms: 365.25 * 24 * 60 * 60 * 1000,
    s: 365.25 * 24 * 60 * 60,
    m: 365.25 * 24 * 60,
    h: 365.25 * 24,
    d: 365.25,
    w: 365.25 / 7,
    y: 1
  }
};

console.log(convert(12, 'm', 's', 'cm', 'm'));
console.log(convert(12, 'm', 's', 'cm', 'm', true));
console.log(convertLength(3, 'm', 'km'));
console.log(convertLength(3, 'm', 'km', true));
console.log(convertToString(3, 'm', 'km', 'length', true));
console.log(convertTime(30, 'm', 's'));
console.log(convertTime(30, 'm', 's', true));
console.log(convertToString(30, 'm', 's', 'time', true));

function convert (val, unit1In, unit2In, unit1Out, unit2Out, asArray) {
  if (typeof val === 'number' && asArray === true) {
    return [val, unit1In, unit2In, val * length[unit1In][unit1Out] / time[unit2In][unit2Out], unit1Out, unit2Out];
  } else if (typeof val === 'number' && unit2Out) {
    return val * length[unit1In][unit1Out] / time[unit2In][unit2Out];
  } else if (val) {
    return val;
  } else {
    return 0;
  }
}

function convertLength (val, unitIn, unitOut, asArray) {
  if (typeof val === 'number' && asArray === true) {
    return [val, unitIn, val * length[unitIn][unitOut], unitOut];
  } else if (typeof val === 'number' && unitOut) {
    return val * length[unitIn][unitOut];
  } else if (val) {
    return val;
  } else {
    return 0;
  }
}

function convertTime (val, unitIn, unitOut, asArray) {
  if (typeof val === 'number' && asArray === true) {
    return [val, unitIn, val * time[unitIn][unitOut], unitOut];
  } else if (typeof val === 'number' && unitOut) {
    return val * time[unitIn][unitOut];
  } else if (val) {
    return val;
  } else {
    return 0;
  }
}

function convertToString (val, unitIn, unitOut, unitType, asArray) {
  if (typeof val === 'number' && asArray === true) {
    if (unitType === 'length') {
      var valOut = convertLength(val, unitIn, unitOut, asArray);
    } else if (unitType === 'time') {
      var valOut = convertTime(val, unitIn, unitOut, asArray);
    } else {
      console.error('unitType must be "length" or "time".');
    }
    return valOut[0] + ' ' + valOut[1] + ' = ' + valOut[2] + ' ' + valOut[3];
  } else {
    console.error('All values not specified.');
  }
}
