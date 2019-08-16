import RegionService from '../../../../src/services/region/region.service';
import Models from '../../../../src/models';
import CONSTANTS from '../../constant/constants';

const { Region } = Models;
const { FIRST_CALL_TO_FUNCTION, SECOND_CALL_TO_FUNCTION, FIRST_ARGUMENT } = CONSTANTS;

const RESPONSE = {
  SUCCESS: [
    { id: CONSTANTS.UUID, name: 'a' },
    { id: CONSTANTS.UUID, name: 'b' },
  ],
};
const REQUEST = {
  SUCCESS: {
    PARAMS: {
      attributes: ['id', 'name'],
      limit: 2,
      offset: 0,
    },
    DEFAULT_PARAMS: {
      attributes: ['id', 'name'],
      limit: 1000,
      offset: 0,
    },
  },
};
const input = {
  PARAMS: {
    query: {
      limit: 2,
      offset: 0,
    },
  },
  DEFAULT_PARAMS: {
    query: {
      limit: null,
      offset: null,
    },
  },
};

Region.findAll = jest.fn().mockResolvedValue(RESPONSE.SUCCESS);

describe('region list', () => {
  it('list function exist', async () => {
    expect(RegionService().list()).toBeDefined();
  });

  it('mock sequelize findAll', async () => {
    const mock = await Region.findAll();
    expect(mock).toEqual(RESPONSE.SUCCESS);
  });

  it('succesful response.', async () => {
    const response = await RegionService().list(input.DEFAULT_PARAMS);

    expect(response).toEqual(RESPONSE.SUCCESS);
  });

  it('succesful response with limit and offset parameters.', async () => {
    Region.findAll.mockClear();
    await RegionService().list(input.PARAMS);

    expect(Region.findAll).toHaveBeenCalled();
    expect(Region.findAll.mock.calls[FIRST_CALL_TO_FUNCTION][FIRST_ARGUMENT])
      .toEqual(REQUEST.SUCCESS.PARAMS);
  });

  it('succesful response with limit and offset by default.', async () => {
    await RegionService().list(input.DEFAULT_PARAMS);

    expect(Region.findAll).toHaveBeenCalled();
    expect(Region.findAll.mock.calls[SECOND_CALL_TO_FUNCTION][FIRST_ARGUMENT])
      .toEqual(REQUEST.SUCCESS.DEFAULT_PARAMS);
  });
});
