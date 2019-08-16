import RegionService from '../../../../src/services/region/region.service';
import Models from '../../../../src/models';
import CONSTANTS from '../../constant/constants';

const { Region } = Models;
const { FIRST_CALL_TO_FUNCTION, FIRST_ARGUMENT, SECOND_ARGUMENT } = CONSTANTS;

const RESPONSE = {
  SUCCESS: {
    findById: {
      id: CONSTANTS.UUID,
      name: 'a',
      Communes: {
        id: CONSTANTS.UUID,
        name: 'b',
      },
    },
    RegionService: {
      id: CONSTANTS.UUID,
      name: 'a',
      communes: {
        id: CONSTANTS.UUID,
        name: 'b',
      },
    },
  },
  UNSUCCESS: undefined,
};

const REQUEST = {
  SUCCESS: {
    attributes: ['id', 'name'],
    include: [{
      attributes: ['id', 'name'],
      model: Models.Commune,
      required: true,
    }],
  },
};

const error = { error: 'ERROR!' };

const input = {
  params: {
    region_id: CONSTANTS.UUID,
  },
  throw: (code, handler) => {
    throw error;
  },
};

Region.findById = jest.fn().mockResolvedValue(RESPONSE.SUCCESS.findById);

describe('region show', () => {
  it('show function exist', async () => {
    expect(RegionService().show()).toBeDefined();
  });

  it('mock sequelize findById.', async () => {
    const mock = await Region.findById();
    expect(mock).toEqual(RESPONSE.SUCCESS.findById);
  });

  it('succesful response.', async () => {
    const response = await RegionService().show(input);
    expect(response).toEqual(RESPONSE.SUCCESS.RegionService);
  });

  it('successful input to Commune.findById.', async () => {
    Region.findById.mockClear();

    await RegionService().show(input);

    expect(Region.findById).toHaveBeenCalled();
    expect(Region.findById.mock.calls[FIRST_CALL_TO_FUNCTION][FIRST_ARGUMENT])
      .toBe(CONSTANTS.UUID);
    expect(Region.findById.mock.calls[FIRST_CALL_TO_FUNCTION][SECOND_ARGUMENT])
      .toEqual(REQUEST.SUCCESS);
  });

  it('error response.', async () => {
    Region.findById = jest.fn().mockResolvedValue(RESPONSE.UNSUCCESS);

    try {
      await RegionService().show(input);
    } catch (errorMsg) {
      expect(errorMsg).toEqual(error);
    }
  });
});
