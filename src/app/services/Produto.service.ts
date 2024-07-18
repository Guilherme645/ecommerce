import { Injectable } from '@angular/core';
import { Produto } from '../produto';
import { ConfirmationService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

constructor(private confirmationService: ConfirmationService) { }

getProduto(): Produto[]{
  return[
    { id: 1, nome: 'Lenovo Notebook ThinkPad T16 Gen 2', descricao: 'Lenovo Notebook ThinkPad T16 Gen 2 21HH001MUS 16 Touchscreen - WUXGA - 1920 x 1200 - Intel Core i7 13ª geração i7-1355U Deca-core [10 Core] 1,70 GHz - 16 GB RAM total - 16 GB de memória integrada - 512 GB', preco: 100, img:"./assets/Notebook-Gamer-Msi-Multi-15-13-Gera-o-Intel-I9-13900h-Rtx-4070-Tela-15Polegadas-QHD-SSD-4TB-Nvme-RAM-64GB_1697043498_gg-removebg-preview.png" },
    { id: 2, nome: 'Lenovo Notebook ThinkPad T16 Gen 2', descricao: 'Lenovo Notebook ThinkPad T16 Gen 2 21HH001MUS 16 Touchscreen - WUXGA - 1920 x 1200 - Intel Core i7 13ª geração i7-1355U Deca-core [10 Core] 1,70 GHz - 16 GB RAM total - 16 GB de memória integrada - 512 GB', preco: 100, img:"./assets/Notebook-Gamer-Msi-Multi-15-13-Gera-o-Intel-I9-13900h-Rtx-4070-Tela-15Polegadas-QHD-SSD-4TB-Nvme-RAM-64GB_1697043498_gg-removebg-preview.png" },
    { id: 3, nome: 'Lenovo Notebook ThinkPad T16 Gen 2', descricao: 'Lenovo Notebook ThinkPad T16 Gen 2 21HH001MUS 16 Touchscreen - WUXGA - 1920 x 1200 - Intel Core i7 13ª geração i7-1355U Deca-core [10 Core] 1,70 GHz - 16 GB RAM total - 16 GB de memória integrada - 512 GB', preco: 100, img:"./assets/Notebook-Gamer-Msi-Multi-15-13-Gera-o-Intel-I9-13900h-Rtx-4070-Tela-15Polegadas-QHD-SSD-4TB-Nvme-RAM-64GB_1697043498_gg-removebg-preview.png" },
  ]
}
getProdutoById(id: number): Produto | undefined {
  return this.getProduto().find(produto => produto.id === id);
}

}
