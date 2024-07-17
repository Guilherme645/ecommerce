import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-de-pesquisa',
  templateUrl: './barraDePesquisa.component.html',
  styleUrls: ['./barraDePesquisa.component.css']
})
export class BarraDePesquisaComponent {

  pesquisas: string = '';

  @Output() barraDePesquisa = new EventEmitter<string>();

  pesquisar(): void {
    this.barraDePesquisa.emit(this.pesquisas);
  }
}
