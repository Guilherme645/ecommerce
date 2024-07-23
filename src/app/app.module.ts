import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarModule } from 'primeng/sidebar';
import { MegaMenuModule } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { ToolbarModule } from 'primeng/toolbar';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { IndexComponent } from './pages/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoService } from './services/Produto.service';
import { MenuComponent } from './components/menu/menu.component';
import { BarraDePesquisaComponent } from './components/barraDePesquisa/barraDePesquisa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisuprodComponent } from './pages/visuprod/visuprod.component';
import { RatingModule } from 'primeng/rating';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import {MessageService} from 'primeng/api';
import { ButtonLikeComponent } from './components/buttonLike/buttonLike.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './components/tabela/tabela.component';
import { ConfigurarProdutoComponent } from './pages/configurarProduto/configurarProduto.component';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { PCarrinhoComponent } from './pages/pCarrinho/pCarrinho.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { PfavoritosComponent } from './pages/pfavoritos/pfavoritos.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    IndexComponent,
    ProdutosComponent,
    MenuComponent,
    BarraDePesquisaComponent,
    VisuprodComponent,
    ButtonLikeComponent,
    TabelaComponent,
    ConfigurarProdutoComponent,
    CarrinhoComponent,
    PCarrinhoComponent,
    FavoritosComponent,
    PfavoritosComponent
    
    
    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    ToolbarModule,
    AppRoutingModule,
    MegaMenuModule,
    FormsModule,
    RatingModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule,
    HttpClientModule,
    TableModule,
    TagModule,
    CommonModule,
    DialogModule,
  
    
    
    
    
  
  
  ],
  providers: [ProdutoService, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
