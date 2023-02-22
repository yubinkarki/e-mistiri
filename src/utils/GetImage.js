import {Images} from '@app/constants';

export default GetImage = image => {
  switch (image) {
    case 'engineFilter':
      return Images.engineFilter;

    case 'brakePad':
      return Images.brakePad;

    case 'gearBox':
      return Images.gearBox;

    case 'regularService':
      return Images.regularService;

    default:
      return 'No image found';
  }
};
