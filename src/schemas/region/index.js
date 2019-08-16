const list = require('./list');
const show = require('./show');

export default () => {
  return {
    list: list.list,
    show: show.show,
  };
};
