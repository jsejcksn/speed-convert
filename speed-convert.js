var length = {
  ft: {
    ft: 1,
    m: 0.3048,
    mi: 1 / 5280,
    yd: 1 / 3
  },
  m: {
    ft: 1 / 0.3048,
    m: 1,
    mi: 1 / 1609.344,
    yd: 1 / 0.9144
  },
  mi: {
    ft: 5280,
    m: 1609.344,
    mi: 1,
    yd: 1760
  },
  yd: {
    ft: 3,
    m: 0.9144,
    mi: 1 / 1760,
    yd: 1
  }
};

console.log('1 m = ' + length.m.ft + ' ft');
