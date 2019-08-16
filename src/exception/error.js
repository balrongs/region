import CODES from '../config/constants/codes';
import ERRORS from '../config/constants/errors';
import helpers from '../helpers/string.helper';

export default (ctx, msg = null, code = null) => {
  let errorCode;
  let description;
  const str = helpers.string;

  switch (ctx.status) {
    case CODES.HTTP.BAD_REQUEST:
      errorCode = ERRORS.GENERAL.BAD_REQUEST.CODE;
      description = ERRORS.GENERAL.BAD_REQUEST.MESSAGE;
      break;
    case CODES.HTTP.FORBIDDEN:
      errorCode = ERRORS.GENERAL.FORBIDDEN.CODE;
      description = ERRORS.GENERAL.FORBIDDEN.MESSAGE;
      break;
    case CODES.HTTP.NOT_FOUND:
      errorCode = ERRORS.GENERAL.NOT_FOUND.CODE;
      description = ERRORS.GENERAL.NOT_FOUND.MESSAGE;
      break;
    case CODES.HTTP.METHOD_NOT_ALLOWED:
      errorCode = ERRORS.GENERAL.METHOD_NOT_ALLOWED.CODE;
      description = ERRORS.GENERAL.METHOD_NOT_ALLOWED.MESSAGE.replace('$(method)', ctx.request.method);
      break;
    case CODES.HTTP.NOT_ACCEPTABLE:
      errorCode = ERRORS.GENERAL.NOT_ACCEPTABLE.CODE;
      description = ERRORS.GENERAL.NOT_ACCEPTABLE.MESSAGE;
      break;
    default:
      errorCode = ERRORS.GENERAL.INTERNAL_ERROR.CODE;
      description = ERRORS.GENERAL.INTERNAL_ERROR.MESSAGE;
      break;
  }

  return {
    error: str.isSet(code) ? code : errorCode,
    error_description: str.isSet(msg) ? msg : description,
  };
};
