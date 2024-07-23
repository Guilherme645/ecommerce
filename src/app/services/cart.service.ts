import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from 'src/app/produto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: Produto[] = [];
  private cartSubject = new BehaviorSubject<Produto[]>(this.cartProducts);

  cart$ = this.cartSubject.asObservable();

  addToCart(product: Produto): void {
    const isProductInCart = this.cartProducts.some(p => p.id === product.id);
    if (!isProductInCart) {
      this.cartProducts.push(product);
      this.cartSubject.next(this.cartProducts);
    }
  }

  getCartProducts(): Produto[] {
    return [...this.cartProducts];
  }
}
