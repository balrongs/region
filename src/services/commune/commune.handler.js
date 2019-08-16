import ValidatorUIID from '../../validator/uui.validator';
import Validator from '../../validator';
import Schema from '../../schemas/commune';

const schema = Schema();
export default ({ communeService }) => {
  const commune = {};

  commune.list = async ctx => {
    return Validator(
      ctx,
      schema.list,
      ctx.query,
      communeService.list,
    );
  };

  commune.show = async ctx => {
    return ValidatorUIID(
      ctx,
      schema.show,
      { id: ctx.params.commune_id },
      communeService.show,
    );
  };

  return commune;
};
