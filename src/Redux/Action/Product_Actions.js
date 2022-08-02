import { ActionType } from '../Constatnts/Constant';

export const setProducts = (products) => {
  return {
    type: ActionType.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCTS,
    payload: product,
  };
};
