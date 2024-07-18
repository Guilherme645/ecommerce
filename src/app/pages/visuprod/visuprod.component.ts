import { ProdutoService } from 'src/app/services/Produto.service';
// src/app/pages/visuprod/visuprod.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../produto';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-visuprod',
  templateUrl: './visuprod.component.html',
  styleUrls: ['./visuprod.component.css']
})
export class VisuprodComponent implements OnInit {
  produto: Produto | undefined;
  formGroup!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private ProdutoService: ProdutoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.ProdutoService.getProdutoById(id);
    this.formGroup = new FormGroup({
      value: new FormControl(4)
  });
  }
}
