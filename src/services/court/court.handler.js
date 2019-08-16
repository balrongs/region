import ValidatorUIID from '../../validator/uui.validator';
import Validator from '../../validator';
import Schema from '../../schemas/court';

const schema = Schema();
export default ({ courtService }) => {
  const court = {};

  court.list = async ctx => {
    return Validator(
      ctx,
      schema.list,
      ctx.query,
      courtService.list,
    );
  };

  court.show = async ctx => {
    return ValidatorUIID(
      ctx,
      schema.show,
      { id: ctx.params.court_id },
      courtService.show,
    );
  };

  return court;
};
