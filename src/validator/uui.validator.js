
import validateUUID from 'uuid-validate';
import Validator from 'fastest-validator';
import CODES from '../config/constants/codes';
import MESSAGES from '../config/constants/messages';
import PARAMETERS from '../config/constants/parameters';
import Error from './error';

export default async (ctx, schema, params, fn) => {
  const validator = new Validator();
  const check = validator.compile(schema);
  const validationResult = check(params);
  const uuidValidationResult = validateUUID(params.id, PARAMETERS.UUID_VERSION);
  const handler = Error();
  if (uuidValidationResult) {
    if (validationResult === true) {
      return fn(ctx);
    }
    ctx.throw(CODES.HTTP.BAD_REQUEST, handler.param(validationResult.shift().field));
  }
  ctx.throw(CODES.HTTP.BAD_REQUEST, MESSAGES.VALIDATIONS.UUID);
};
