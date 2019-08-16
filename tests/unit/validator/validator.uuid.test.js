import validator from '../../../src/validator/uui.validator';
import { UUID } from '../constant/constants';

const fn = ctx => ctx;
const error = 'Error';
const ctx = {
  data: 'Hello world',
  throw: (code, handler) => {
    throw error;
  },
};
const schema = {
  id: {
    type: 'string',
    min: 1,
    max: 40,
  },
};

describe('validator', async () => {
  it('should return ctx if schema and param match.', async () => {
    const params = { id: UUID };

    const result = await validator(ctx, schema, params, fn);

    expect(result).toBe(ctx);
  });

  it('should return undefined if params dont match with schema.', async () => {
    const params = [{ id: '1234' }, { other: '1234' }];
    params.forEach(async param => {
      try {
        await validator(ctx, schema, param, fn);
      } catch (errorMsg) {
        expect(errorMsg).toBe(error);
      }
    });
  });
});
