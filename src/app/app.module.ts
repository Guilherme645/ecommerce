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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    IndexComponent,
    ProdutosComponent,
    MenuComponent,
    BarraDePesquisaComponent
  
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
    FormsModule
  
  
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
