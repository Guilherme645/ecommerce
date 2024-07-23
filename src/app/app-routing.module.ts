import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { VisuprodComponent } from './pages/visuprod/visuprod.component';
import { ConfigurarProdutoComponent } from './pages/configurarProduto/configurarProduto.component';
import { PCarrinhoComponent } from './pages/pCarrinho/pCarrinho.component';
import { PfavoritosComponent } from './pages/pfavoritos/pfavoritos.component';

  const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },

    { path: 'index', component: IndexComponent },
    
    { path: 'visuprod/:id', component: VisuprodComponent },

    { path: 'configurarProduto', component: ConfigurarProdutoComponent },

    { path: 'pCarrinho', component: PCarrinhoComponent },

    { path: 'pFavoritos', component: PfavoritosComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
