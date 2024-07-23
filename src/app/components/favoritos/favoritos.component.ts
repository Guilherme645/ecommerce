import { MessageService } from 'primeng/api';
import { Produto } from 'src/app/produto';
import { LikeService } from './../../services/like.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  products: Produto[] = [];
  productDialog: boolean = false;
  product: Produto = {} as Produto;
  selectedProducts: Produto[] = [];
  submitted: boolean = false;
  isNewProduct: boolean = false;
  file: File | null = null;
  constructor(private LikeService: LikeService, private messageService: MessageService) {}


  ngOnInit(): void {
    this.products = this.LikeService.getLikeProducts();
    this.LikeService.like$.subscribe(products => {
      this.products = products;
    });
  }

  openNew(): void {
    this.product = {} as Produto;
    this.submitted = false;
    this.productDialog = true;
    this.isNewProduct = true;
  }

  deleteProduct(product: Produto): void {
    this.products = this.products.filter(val => val.id !== product.id);
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
  }

  findIndexById(id: number): number {
    return this.products.findIndex(prod => prod.id === id);
  }

  hideDialog(): void {
    this.productDialog = false;
    this.submitted = false;
  }
}

