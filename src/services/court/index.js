import CourtService from './court.service';
import CourtHandler from './court.handler';

export default () => {
  const courtService = CourtService();
  const courtHandler = CourtHandler({ courtService });

  return {
    list: courtHandler.list,
    show: courtHandler.show,
  };
};
