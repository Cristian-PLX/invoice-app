import { inject, InjectionToken } from '@angular/core';
import { CartRepository } from './cart.port';
import { CartHttpRepository } from '../infra/repositories/cart-http.repository';

export const CART_REPOSITORY = new InjectionToken<CartRepository>(
  'CartRepository',
  {
    providedIn: 'root',
    factory: () => inject(CartHttpRepository),
  }
);
