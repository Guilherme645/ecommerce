import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';  // Importe o serviço de carrinho
import { MessageService } from 'primeng/api';
import { Produto } from 'src/app/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  products: Produto[] = [];
  productDialog: boolean = false;
  product: Produto = {} as Produto;
  selectedProducts: Produto[] = [];
  submitted: boolean = false;
  isNewProduct: boolean = false;
  file: File | null = null;

  constructor(private cartService: CartService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.products = this.cartService.getCartProducts();
    this.cartService.cart$.subscribe(products => {
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
