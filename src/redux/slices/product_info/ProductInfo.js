import {createSlice} from '@reduxjs/toolkit';

import {Images} from '@app/constants';

const initialState = {
  allProducts: [
    {
      id: 1,
      title: 'Engine Filter',
      subtitle: 'Lorem ipsum',
      price: 1540,
      image: Images.engineFilter,
    },
    {
      id: 2,
      title: 'Brake Pad',
      subtitle: 'Lorem ipsum',
      price: 1240,
      image: Images.brakePad,
    },
    {
      id: 3,
      title: 'Clutch Wire',
      subtitle: 'Lorem ipsum',
      price: 640,
      image: Images.gearBox,
    },
    {
      id: 4,
      title: 'Chain Sprocket',
      subtitle: 'Lorem ipsum',
      price: 140,
      image: Images.engineFilter,
    },
    {
      id: 5,
      title: 'Handle Bar',
      subtitle: 'Lorem ipsum',
      price: 40,
      image: Images.brakePad,
    },
    {
      id: 6,
      title: 'Side Mirror',
      subtitle: 'Lorem ipsum',
      price: 790,
      image: Images.gearBox,
    },
    {
      id: 7,
      title: 'Oil Filter',
      subtitle: 'Lorem ipsum',
      price: 440,
      image: Images.engineFilter,
    },
    {
      id: 8,
      title: 'Air Filter',
      subtitle: 'Lorem ipsum',
      price: 2239,
      image: Images.gearBox,
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
