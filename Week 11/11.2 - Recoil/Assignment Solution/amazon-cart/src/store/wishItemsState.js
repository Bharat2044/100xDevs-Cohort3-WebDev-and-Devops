import { atom } from 'recoil';

export const wishItemsState = atom({
  key: 'wishItemsState',
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
    { id: 3, name: 'Computer Monitor', price: 9990.00, image: 'https://m.media-amazon.com/images/I/41T6tUGZYkL._SS220_.jpg', rating: 4.2, reviews: 2500, oldPrice: 12000.00, quantity: 1, },
    { id: 4, name: 'Wall Art 1', price: 1500.00, image: 'https://m.media-amazon.com/images/I/41wE694AKFL._SS220_.jpg', rating: 4.3, reviews: 800, oldPrice: 1800.00, quantity: 1, },
    { id: 5, name: 'Wall Art 2', price: 2000.00, image: 'https://m.media-amazon.com/images/I/51Oa7UssIbL._SS220_.jpg', rating: 4.6, reviews: 1200, oldPrice: 2200.00, quantity: 1, },
    { id: 6, name: 'Finish What You Start: The Art of Following Through, Taking Action, Executing, & Self-Discipline', price: 270.00, image: 'https://m.media-amazon.com/images/I/51KWqhR+WWL._SS220_.jpg', rating: 4.6, reviews: 1822, oldPrice: 898.00, quantity: 1, },
    { id: 7, name: 'The Art of Impossible : A Peak Performance Primer', price: 365.00, image: 'https://m.media-amazon.com/images/I/51445enmt9S._SS220_.jpg', rating: 4.4, reviews: 1200, oldPrice: 385.00, quantity: 1, },
    { id: 8, name: 'Decorate Item', price: 2000.00, image: 'https://m.media-amazon.com/images/I/41dS2e9cJVL._SS220_.jpg', rating: 4.1, reviews: 1200, oldPrice: 421.00, quantity: 1, },
  ],
});
