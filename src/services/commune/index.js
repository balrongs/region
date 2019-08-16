import CommuneService from './commune.service';
import CommuneHandler from './commune.handler';

export default () => {
  const communeService = CommuneService();
  const communeHandler = CommuneHandler({ communeService });

  return {
    list: communeHandler.list,
    show: communeHandler.show,
  };
};
