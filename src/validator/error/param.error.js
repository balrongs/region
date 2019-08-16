import MESSAGES from '../../config/constants/messages';
import helpers from '../../helpers/string.helper';

export default (param) => {
  const errorDescription = helpers.string.isSet(param)
    ? MESSAGES.VALIDATIONS.PARAM.replace('$(param)', param)
    : null;

  return errorDescription;
};
