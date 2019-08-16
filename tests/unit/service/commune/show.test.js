import CommuneService from '../../../../src/services/commune/commune.service';
import Models from '../../../../src/models';
import CONSTANTS from '../../constant/constants';

const { Commune } = Models;
const { FIRST_CALL_TO_FUNCTION, FIRST_ARGUMENT, SECOND_ARGUMENT } = CONSTANTS;

const RESPONSE = {
  SUCCESS: {
    findById: {
      id: CONSTANTS.UUID,
      name: 'a',
      Region: {
        id: CONSTANTS.UUID,
        name: 'b',
      },
    },
    CommuneService: {
      id: CONSTANTS.UUID,
      name: 'a',
      region: {
        id: CONSTANTS.UUID,
        name: 'b',
      },
    },
  },
  UNSUCCESS: undefined,
};
const REQUEST = {
  SUCCESS: {
    PARAMS: {
      attributes: ['id', 'name'],
      include: [{
        attributes: ['id', 'name'],
        model: Models.Region,
        required: true,
      }],
    },
  },
};
const error = { error: 'ERROR!' };
const input = {
  params: {
    commune_id: CONSTANTS.UUID,
  },
  throw: (code, handler) => {
    throw error;
  },
};

Commune.findById = jest.fn().mockResolvedValue(RESPONSE.SUCCESS.findById);

describe('region show', () => {
  it('show function exist', () => {
    expect(CommuneService().show()).toBeDefined();
  });

  it('mock sequelize findById.', async () => {
    const mock = await Commune.findById();
    expect(mock).toEqual(RESPONSE.SUCCESS.findById);
  });

  it('succesful response.', async () => {
    const response = await CommuneService().show(input);
    expect(response).toEqual(RESPONSE.SUCCESS.CommuneService);
  });

  it('successful input to Commune.findById', async () => {
    Commune.findById.mockClear();
    
    await CommuneService().show(input);

    expect(Commune.findById).toHaveBeenCalled();
    expect(Commune.findById.mock.calls[FIRST_CALL_TO_FUNCTION][FIRST_ARGUMENT])
      .toBe(CONSTANTS.UUID);
    expect(Commune.findById.mock.calls[FIRST_CALL_TO_FUNCTION][SECOND_ARGUMENT])
      .toEqual(REQUEST.SUCCESS.PARAMS);
  });
  it('error response.', async () => {
    Commune.findById = jest.fn().mockResolvedValue(RESPONSE.UNSUCCESS);

    try {
      await CommuneService().show(input);
    } catch (errorMsg) {
      expect(errorMsg).toEqual(error);
    }
  });
});
