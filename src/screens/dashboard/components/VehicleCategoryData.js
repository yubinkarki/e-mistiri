import {Images} from '@app/constants';

export default VehicleCategoryData = [
  {
    id: 1,
    title: 'Bike',
    image: <Images.bike width={50} height={45} />,
    isActive: true,
  },
  {
    id: 2,
    title: 'Scooter',
    image: <Images.scooter width={50} height={45} />,
    isActive: false,
  },
  {
    id: 3,
    title: 'Car',
    image: <Images.car width={50} height={45} />,
    isActive: false,
  },
  {
    id: 4,
    title: 'Accessories',
    image: <Images.accessories width={50} height={45} />,
    isActive: false,
  },
];
