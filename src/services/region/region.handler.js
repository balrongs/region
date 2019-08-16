import ValidatorUIID from '../../validator/uui.validator';
import Validator from '../../validator';
import Schema from '../../schemas/region';


const schema = Schema();
export default ({ regionService }) => {
  const region = {};

  region.list = async ctx => {
    return Validator(
      ctx,
      schema.list,
      ctx.query,
      regionService.list,
    );
  };

  region.show = async ctx => {
    return ValidatorUIID(
      ctx,
      schema.show,
      { id: ctx.params.region_id },
      regionService.show,
    );
  };

  return region;
};
