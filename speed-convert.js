var length = {
  cm: {
    cm: 1,
    ft: 0.01 / 0.3048,
    km: 0.00001,
    m: 0.01,
    mi: 0.01 / 1609.344,
    yd: 0.01 / 0.9144
  },
  ft: {
    cm: 30.48,
    ft: 1,
    km: 0.0003048,
    m: 0.3048,
    mi: 1 / 5280,
    yd: 1 / 3
  },
  km: {
    cm: 100000,
    ft: 1000 / 0.3048,
    km: 1,
    m: 1000,
    mi: 1000 / 1609.344,
    yd: 1000 / 0.9144
  },
  m: {
    cm: 100,
    ft: 1 / 0.3048,
    km: 0.001,
    m: 1,
    mi: 1 / 1609.344,
    yd: 1 / 0.9144
  },
  mi: {
    cm: 160934.4,
    ft: 5280,
    km: 1.609344,
    m: 1609.344,
    mi: 1,
    yd: 1760
  },
  yd: {
    cm: 91.44,
    ft: 3,
    km: 0.0009144,
    m: 0.9144,
    mi: 1 / 1760,
    yd: 1
  }
};

console.log('1 m = ' + length.m.ft + ' ft');
console.log(convertToString(3, 'm', 'km'));

function convert (val, unitIn, unitOut) {
  return val * length[unitIn][unitOut];
}

function convertToString (val, unitIn, unitOut) {
  var valOut = convert(val, unitIn, unitOut);
  return val + ' ' + unitIn + ' = ' + valOut + ' ' + unitOut;
}