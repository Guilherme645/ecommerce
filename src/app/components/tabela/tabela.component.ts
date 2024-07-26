import { Router } from '@angular/router';
// tabela.component.ts
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/Produto.service';
import { MessageService } from 'primeng/api';
import { Produto } from 'src/app/produto';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
  providers: [MessageService]
})
export class TabelaComponent implements OnInit {
  products: Produto[] = [];
  productDialog: boolean = false;
  product: Produto = {} as Produto;
  selectedProducts: Produto[] = [];
  submitted: boolean = false;
  isNewProduct: boolean = false;
  file: File | null = null;

  constructor(private produtoService: ProdutoService, private messageService: MessageService, private Router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.produtoService.getProdutos().subscribe((data: Produto[]) => {
      this.products = data;
    });
  }

  openNew(): void {
    this.product = {} as Produto;
    this.submitted = false;
    this.productDialog = true;
    this.isNewProduct = true;
  }

  editProduct(product: Produto): void {
    this.product = { ...product };
    this.productDialog = true;
    this.isNewProduct = false;
  }

  deleteProduct(product: Produto): void {
    this.produtoService.deleteProduto(product.id).subscribe(() => {
      this.products = this.products.filter(val => val.id !== product.id);
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    });
  }

  saveProduct(): void {
    this.submitted = true;
  
    if (this.product.nome.trim()) {
      if (this.isNewProduct) {
        this.produtoService.createProduto(this.product).subscribe((data: Produto) => {
          this.products.push(data);
          if (this.file) {
            this.uploadImage(data.id); // Certifique-se de que o ID do produto é passado corretamente
          } else {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
          }
        });
      } else {
        this.produtoService.updateProduto(this.product).subscribe((data: Produto) => {
          this.products[this.findIndexById(this.product.id)] = data;
          if (this.file) {
            this.uploadImage(this.product.id); // Certifique-se de que o ID do produto é passado corretamente
          } else {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
          }
        });
      }
  
      this.products = [...this.products];
      this.productDialog = false;
      this.product = {} as Produto;
    }
  }

  findIndexById(id: number): number {
    return this.products.findIndex(prod => prod.id === id);
  }

  hideDialog(): void {
    this.productDialog = false;
    this.submitted = false;
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
    }
  }

  report(){
    this.Router.navigate(['/report']);
  }

  uploadImage(produtoId: number): void {
    if (this.file) {
      const formData = new FormData();
      formData.append('file', this.file);
  
      this.produtoService.uploadImagem(formData, produtoId).subscribe(response => {
        this.product.img = response.imageUrl; // Atualize a URL da imagem
        this.produtoService.updateProduto(this.product).subscribe(() => {
          this.loadProducts(); // Recarregue a lista de produtos para atualizar a tabela
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Image Uploaded', life: 3000 });
          this.file = null; // Limpe o arquivo após o upload
        });
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to upload image', life: 3000 });
      });
    }
  }
  
}
