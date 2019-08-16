import constant from '../../config/constants/pagination';
import Models from '../../models';
import CODES from '../../config/constants/codes';
import ERRORS from '../../config/constants/errors';

const { Court } = Models;
const { Commune } = Models;
const { Region } = Models;
export default () => {
  const court = {};

  court.list = async ctx => {
    const limit = (ctx.query.limit) ? ctx.query.limit : constant.PAGINATION.LIST.LIMIT;
    const offset = (ctx.query.offset) ? ctx.query.offset : constant.PAGINATION.LIST.OFFSET;

    const response = await Court.findAll({
      attributes: [
        'id',
        'name',
        'commune_id',
      ],
      limit,
      offset,
    });

    return response;
  };

  court.show = async ctx => {
    const response = await Court.findByPk(
      ctx.params.court_id,
      {
        attributes: [
          'id',
          'name',
        ],
        include: [{
          as: 'commune',
          model: Commune,
          required: true,
          attributes: [
            'id',
            'name',
          ],
          include: [{
            as: 'region',
            model: Region,
            required: true,
            attributes: [
              'id',
              'name',
            ],
          }],
        },
        ],
      },
    );

    if (!response) {
      ctx.throw(CODES.HTTP.NOT_FOUND, ERRORS.GENERAL.NOT_FOUND);
    }
    return response;
  };

  return court;
};
