import { ActionType } from '../Constants/Constant';

const initialState = {
  products: [
    {
      id: 1,
      title: 'Harry Porter Vol-1',
      category: 'Book',
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCTS:
      return state;
    default:
      return state;
  }
};
