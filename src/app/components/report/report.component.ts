import { Produto } from './../../produto';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


  salesData!: ChartData<'bar'>;
  topProductsData!: ChartData<'pie'>;
  bottomProductsData!: ChartData<'pie'>;
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.label + ': ' + context.raw;
          }
        }
      }
    },
    layout: {
      padding: 20
    }
  };

  private Produto: Produto[] = [
    { "id": 1, "nome": "Lenovo Notebook ThinkPad T16 Gen 2", "descricao": "Lenovo Notebook ThinkPad T16 Gen 2 21HH001MUS 16 Touchscreen - WUXGA - 1920 x 1200 - Intel Core i7 13ª geração i7-1355U Deca-core [10 Core] 1,70 GHz - 16 GB RAM total - 16 GB de memória integrada - 512 GB", "preco": 50, "img": "./assets/Notebook-Gamer-Msi-Multi-15-13-Gera-o-Intel-I9-13900h-Rtx-4070-Tela-15Polegadas-QHD-SSD-4TB-Nvme-RAM-64GB_1697043498_gg-removebg-preview.png" },
    { "id": 2, "nome": "Lenovo Notebook ThinkPad T16 Gen 2", "descricao": "Lenovo Notebook ThinkPad T16 Gen 2 21HH001MUS 16 Touchscreen - WUXGA - 1920 x 1200 - Intel Core i7 13ª geração i7-1355U Deca-core [10 Core] 1,70 GHz - 16 GB RAM total - 16 GB de memória integrada - 512 GB", "preco": 2000, "img": "./assets/Notebook-Gamer-Msi-Multi-15-13-Gera-o-Intel-I9-13900h-Rtx-4070-Tela-15Polegadas-QHD-SSD-4TB-Nvme-RAM-64GB_1697043498_gg-removebg-preview.png" },
    { "id": 3, "nome": "Lenovo Notebook ThinkPad T16 Gen 2", "descricao": "Lenovo Notebook ThinkPad T16 Gen 2 21HH001MUS 16 Touchscreen - WUXGA - 1920 x 1200 - Intel Core i7 13ª geração i7-1355U Deca-core [10 Core] 1,70 GHz - 16 GB RAM total - 16 GB de memória integrada - 512 GB", "preco": 3000, "img": "./assets/Notebook-Gamer-Msi-Multi-15-13-Gera-o-Intel-I9-13900h-Rtx-4070-Tela-15Polegadas-QHD-SSD-4TB-Nvme-RAM-64GB_1697043498_gg-removebg-preview.png" },
    { "id": 4, "nome": "Lenovo Notebook ThinkPad T16 Gen 2", "descricao": "Lenovo Notebook ThinkPad T16 Gen 2 21HH001MUS 16 Touchscreen - WUXGA - 1920 x 1200 - Intel Core i7 13ª geração i7-1355U Deca-core [10 Core] 1,70 GHz - 16 GB RAM total - 16 GB de memória integrada - 512 GB", "preco": 3000, "img": "./assets/Notebook-Gamer-Msi-Multi-15-13-Gera-o-Intel-I9-13900h-Rtx-4070-Tela-15Polegadas-QHD-SSD-4TB-Nvme-RAM-64GB_1697043498_gg-removebg-preview.png" }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadSalesData();
    this.loadTopProductsData();
    this.loadBottomProductsData();
  }

  private getProductSalesData(): { labels: string[], data: number[] } {
    const labels = this.Produto.map(p => p.nome);
    const data = this.Produto.map(p => p.preco);
    return { labels, data };
  }

  loadSalesData(): void {
    const { labels, data } = this.getProductSalesData();
    this.salesData = {
      labels,
      datasets: [
        {
          label: 'Vendas',
          data,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    };
  }

  loadTopProductsData(): void {
    const sortedProducts = [...this.Produto].sort((a, b) => b.preco - a.preco);
    const topProducts = sortedProducts.slice(0, 3); // Top 3 produtos
    const labels = topProducts.map(p => p.nome);
    const data = topProducts.map(p => p.preco);
    this.topProductsData = {
      labels,
      datasets: [
        {
          label: 'Produtos Mais Vendidos',
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }
      ]
    };
  }

  loadBottomProductsData(): void {
    const sortedProducts = [...this.Produto].sort((a, b) => a.preco - b.preco);
    const bottomProducts = sortedProducts.slice(0, 3); // Bottom 3 produtos
    const labels = bottomProducts.map(p => p.nome);
    const data = bottomProducts.map(p => p.preco);
    this.bottomProductsData = {
      labels,
      datasets: [
        {
          label: 'Produtos Menos Vendidos',
          data,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }
      ]
    };
  }
}