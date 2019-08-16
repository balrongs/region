import CommuneService from '../../../../src/services/commune/commune.service';
import Models from '../../../../src/models';
import CONSTANTS from '../../constant/constants';

const { Commune } = Models;
const { FIRST_CALL_TO_FUNCTION, SECOND_CALL_TO_FUNCTION, FIRST_ARGUMENT } = CONSTANTS;

const RESPONSE = {
  SUCCESS: [
    { id: CONSTANTS.UUID, name: 'a', region_id: CONSTANTS.UUID },
    { id: CONSTANTS.UUID, name: 'b', region_id: CONSTANTS.UUID },
  ],
};
const REQUEST = {
  SUCCESS: {
    PARAMS: {
      attributes: ['id', 'name', 'region_id'],
      limit: 2,
      offset: 0,
    },
    DEFAULT_PARAMS: {
      attributes: ['id', 'name', 'region_id'],
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
Commune.findAll = jest.fn().mockResolvedValue(RESPONSE.SUCCESS);

describe('Commune list', () => {
  it('list function exist', () => {
    expect(CommuneService().list()).toBeDefined();
  });

  it('mock sequelize findAll', async () => {
    const mock = await Commune.findAll();
    expect(mock).toEqual(RESPONSE.SUCCESS);
  });

  it('succesful response.', async () => {
    const response = await CommuneService().list(input.DEFAULT_PARAMS);

    expect(response).toEqual(RESPONSE.SUCCESS);
  });

  it('succesful response with limit and offset parameters.', async () => {
    Commune.findAll.mockClear();
    await CommuneService().list(input.PARAMS);

    expect(Commune.findAll).toHaveBeenCalled();
    expect(Commune.findAll.mock.calls[FIRST_CALL_TO_FUNCTION][FIRST_ARGUMENT])
      .toEqual(REQUEST.SUCCESS.PARAMS);
  });

  it('succesful response with limit and offset by default.', async () => {
    await CommuneService().list(input.DEFAULT_PARAMS);

    expect(Commune.findAll).toHaveBeenCalled();
    expect(Commune.findAll.mock.calls[SECOND_CALL_TO_FUNCTION][FIRST_ARGUMENT])
      .toEqual(REQUEST.SUCCESS.DEFAULT_PARAMS);
  });
});
