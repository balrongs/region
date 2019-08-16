import constant from '../../config/constants/pagination';
import Models from '../../models';
import CODES from '../../config/constants/codes';
import ERRORS from '../../config/constants/errors';

const { Commune } = Models;
const { Region } = Models;
export default () => {
  const commune = {};

  commune.list = async ctx => {
    const limit = (ctx.query.limit) ? ctx.query.limit : constant.PAGINATION.LIST.LIMIT;
    const offset = (ctx.query.offset) ? ctx.query.offset : constant.PAGINATION.LIST.OFFSET;

    const response = await Commune.findAll({
      attributes: [
        'id',
        'name',
        'region_id',
      ],
      limit,
      offset,
    });

    return response;
  };

  commune.show = async ctx => {
    const communeResult = await Commune.findByPk(
      ctx.params.commune_id,
      {
        attributes: [
          'id',
          'name',
        ],
        include: [{
          model: Region,
          required: true,
          attributes: [
            'id',
            'name',
          ],
        }],
      },
    );

    if (!communeResult) {
      ctx.throw(CODES.HTTP.NOT_FOUND, ERRORS.GENERAL.NOT_FOUND);
    }
    const response = {
      id: communeResult.id,
      name: communeResult.name,
      region: communeResult.Region,
    };

    return response;
  };

  return commune;
};
