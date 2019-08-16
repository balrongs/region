
const list = {
  limit: {
    type: 'number',
    positive: true,
    integer: true,
    min: 0,
    max: 255,
    optional: true,
    convert: true,
  },
  offset: {
    type: 'number',
    positive: true,
    integer: true,
    min: 0,
    max: 255,
    optional: true,
    convert: true,
  },
};

exports.list = list;
