import { atom } from 'recoil';

export const cartItemsState = atom({
  key: 'cartItemsState',
  default: [
    {
      id: 1,
      name: 'Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact Mechanical Keyboard w/White and Grey Color Keycaps, Linear Red Switch, Pro Driver/Software Supported',
      price: 2290.00,
      image: 'https://m.media-amazon.com/images/I/41EckzKo9lL._SS220_.jpg',
      rating: 4.5, quantity: 1,
      reviews: 5261,
      oldPrice: 2790.00
    },
    { id: 2, name: 'USB-C Adapter', price: 289.00, image: 'https://m.media-amazon.com/images/I/31cqa17L5VL._SS220_.jpg', rating: 4, reviews: 1000, oldPrice: 350.00, quantity: 1, },
  ],
});
