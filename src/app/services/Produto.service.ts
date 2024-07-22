import { Produto } from './../produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = 'http://localhost:3000/products'; // Certifique-se de que esta URL está correta

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
      return this.http.get<Produto[]>(`${this.apiUrl}`);
  }

  getProdutoById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }
  createProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  updateProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/${produto.id}`, produto);
  }

  deleteProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
 // produto.service.ts
uploadImagem(formData: FormData, produtoId: number): Observable<{ imageUrl: string }> {
  return this.http.post<{ imageUrl: string }>(`${this.apiUrl}/${produtoId}/upload`, formData);
}

}
