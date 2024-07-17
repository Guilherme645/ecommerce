import { ProdutoService } from './../../services/Produto.service';
import { Produto } from './../../produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

Produto: Produto[] =[];

  constructor(
    private ProdutoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.Produto= this.ProdutoService.getProduto();
  }

}
