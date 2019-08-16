import RegionService from './region.service';
import RegionHandler from './region.handler';

export default () => {
  const regionService = RegionService();
  const regionHandler = RegionHandler({ regionService });

  return {
    list: regionHandler.list,
    show: regionHandler.show,
  };
};
