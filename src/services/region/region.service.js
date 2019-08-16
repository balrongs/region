import constants from '../../config/constants/pagination';
import Models from '../../models';
import CODES from '../../config/constants/codes';
import ERRORS from '../../config/constants/errors';

const { Region, Commune } = Models;
export default () => {
  const region = {};
  region.list = async ctx => {
    const limit = (ctx.query.limit) ? ctx.query.limit : constants.PAGINATION.LIST.LIMIT;
    const offset = (ctx.query.offset) ? ctx.query.offset : constants.PAGINATION.LIST.OFFSET;

    const response = await Region.findAll({
      attributes: [
        'id',
        'name',
      ],
      limit,
      offset,
    });
    return response;
  };

  region.show = async ctx => {
    const regionResponse = await Region.findByPk(
      ctx.params.region_id,
      {
        attributes: [
          'id',
          'name',
        ],
        include: [{
          model: Commune,
          required: true,
          attributes: [
            'id',
            'name',
          ],
        }],
      },
    );
    if (!regionResponse) {
      ctx.throw(CODES.HTTP.NOT_FOUND, ERRORS.GENERAL.NOT_FOUND);
    }
    const response = {
      id: regionResponse.id,
      name: regionResponse.name,
      communes: regionResponse.Communes,
    };
    return response;
  };

  return region;
};
