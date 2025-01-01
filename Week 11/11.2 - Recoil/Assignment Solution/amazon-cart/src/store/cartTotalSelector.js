import { selector } from 'recoil';
import { cartItemsState } from './cartItemsState';

export const cartTotalSelector = selector({
  key: 'cartTotalSelector',
  get: ({ get }) => {
    const cartItems = get(cartItemsState);

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return { total, itemCount };
  },
});
