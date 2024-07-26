import { Injectable } from '@angular/core';
import { Produto } from '../produto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private likeProducts: Produto[] = [];
  private likeSubject = new BehaviorSubject<Produto[]>(this.likeProducts);

  like$ = this.likeSubject.asObservable();

  addToLike(product: Produto): void {
    const isProductInLike = this.likeProducts.some(p => p.id === product.id);
    if (!isProductInLike) {
      this.likeProducts.push(product);
      this.likeSubject.next(this.likeProducts);
    }
  }

  getLikeProducts(): Produto[] {
    return [...this.likeProducts];
  }

  constructor() { }
}
