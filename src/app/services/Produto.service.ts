import { Injectable } from '@angular/core';
import { Produto } from '../produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

constructor() { }

getProduto(): Produto[]{
  return[
    { id: 1, nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 100, img:"./assets/Notebook-Gamer-Msi-Multi-15-13-Gera-o-Intel-I9-13900h-Rtx-4070-Tela-15Polegadas-QHD-SSD-4TB-Nvme-RAM-64GB_1697043498_gg-removebg-preview.png" },
      { id: 2, nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 200, img:"./assets/Notebook-Gamer-Msi-Multi-15-13-Gera-o-Intel-I9-13900h-Rtx-4070-Tela-15Polegadas-QHD-SSD-4TB-Nvme-RAM-64GB_1697043498_gg-removebg-preview.png" },
      { id: 3, nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 300, img:"./assets/s541a3acfc95e4d1790a60abf4bcfa7d5j-ee01cc61c9a95af03116561877956628-1024-1024-removebg-preview.png" },
  ]
}

}
