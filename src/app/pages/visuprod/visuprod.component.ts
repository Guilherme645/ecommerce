import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ProdutoService } from 'src/app/services/Produto.service';
import { Produto } from './../../produto';

@Component({
  selector: 'app-visuprod',
  templateUrl: './visuprod.component.html',
  styleUrls: ['./visuprod.component.css']
})
export class VisuprodComponent implements OnInit {
  produto: Produto | undefined;
  formGroup: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) {
    this.formGroup = new FormGroup({
      value: new FormControl(4) // Inicializa o FormGroup com um controle
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      console.error('ID inválido');
      return;
    }

    this.produtoService.getProdutoById(id).subscribe(
      (data: Produto) => {
        console.log('Produto recebido:', data);
        this.produto = data;
      },
      error => {
        console.error('Erro ao buscar o produto', error);
      }
    );
  }
}
