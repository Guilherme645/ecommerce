import { ProdutoService } from './../../services/Produto.service';
import { Produto } from './../../produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

Produto: Produto[] =[];

constructor(private produtoService: ProdutoService, private router: Router) {}

ngOnInit(): void {
  this.Produto = this.produtoService.getProduto();
}

viewProductDetails(id: number): void {
  this.router.navigate(['/visuprod', id]);
}

}
