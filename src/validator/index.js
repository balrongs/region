import Validator from 'fastest-validator';
import CODES from '../config/constants/codes';
import Error from './error';

export default async (ctx, schema, params, fn) => {
  const validator = new Validator();
  const check = validator.compile(schema);
  const validationResult = check(params);
  const handler = Error();
  if (validationResult === true) {
    return fn(ctx);
  }

  ctx.throw(CODES.HTTP.BAD_REQUEST, handler.param(validationResult.shift().field));
};
