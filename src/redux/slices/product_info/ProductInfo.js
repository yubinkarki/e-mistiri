import {createSlice} from '@reduxjs/toolkit';

import {Images} from '@app/constants';

const initialState = {
  allProducts: [
    {
      id: 1,
      title: 'Engine Filter',
      subtitle: 'Yamaha Engine Filter',
      price: 1540,
      images: [Images.engineFilter, Images.brakePad],
      rating: 3.2,
      description:
        'Mamet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
    },
    {
      id: 2,
      title: 'Brake Pad',
      subtitle: 'FZ Brake Pad',
      price: 1240,
      images: [Images.brakePad, Images.engineFilter, Images.gearBox],
      rating: 4.3,
      description:
        'Mamet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
    },
    {
      id: 3,
      title: 'Clutch Wire',
      subtitle: 'KTM Duke Clutch Wire',
      price: 640,
      images: [Images.gearBox, Images.brakePad],
      rating: 5.0,
      description:
        'Mamet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
    },
    {
      id: 4,
      title: 'Chain Sprocket',
      subtitle: 'Royal Enfield Sprocket',
      price: 140,
      images: [Images.engineFilter, Images.brakePad],
      rating: 3.1,
      description:
        'Mamet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
    },
    {
      id: 5,
      title: 'Handle Bar',
      subtitle: 'Honda Highness Handle Bars',
      price: 40,
      images: [Images.brakePad, Images.engineFilter, Images.gearBox],
      rating: 2.8,
      description:
        'Mamet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
    },
    {
      id: 6,
      title: 'Side Mirror',
      subtitle: 'Dio Side Mirrors',
      price: 790,
      images: [Images.gearBox, Images.engineFilter, Images.brakePad],
      rating: 2.5,
      description:
        'Mamet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
    },
    {
      id: 7,
      title: 'Oil Filter',
      subtitle: 'Vespa Oil Filter',
      price: 440,
      images: [Images.gearBox, Images.engineFilter],
      rating: 4.5,
      description:
        'Mamet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
    },
    {
      id: 8,
      title: 'Air Filter',
      subtitle: 'Thuderbird Air Filter',
      price: 2239,
      images: [Images.brakePad, Images.gearBox],
      rating: 4.1,
      description:
        'Mamet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
    },
  ],
};

export const ProductInfo = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export const {} = ProductInfo.actions;

export default ProductInfo.reducer;
