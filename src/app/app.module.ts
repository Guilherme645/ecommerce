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
import { PaymentComponent } from './components/payment/payment.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { PersonalComponent } from './components/personal/personal.component';
import { SeatComponent } from './components/seat/seat.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';
import { RouterModule, Routes } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { PConcluidoComponent } from './pages/pConcluido/pConcluido.component';
import { ConcluidoComponent } from './components/concluido/concluido.component';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ChartModule } from 'primeng/chart';
import { LoginComponent } from './pages/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PagEntradaComponent } from './pages/pagEntrada/pagEntrada.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ReportComponent } from './components/report/report.component';
import { EntradaESaidaComponent } from './pages/entradaESaida/entradaESaida.component';






const routes: Routes = [
  { path: '', redirectTo: 'personal', pathMatch: 'full' },
  { path: 'personal', component: PersonalComponent },
  { path: 'seat', component: SeatComponent },
  { path: 'payment', component: PaymentInfoComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '**', redirectTo: 'personal' }  // Fallback route
];

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
    PfavoritosComponent,
    PaymentComponent,
    PagamentoComponent,
    PersonalComponent,
    SeatComponent,
    ConfirmationComponent,
    PaymentInfoComponent,
    PConcluidoComponent,
    ConcluidoComponent,
    UsuarioComponent,
    PerfilComponent,
    LoginComponent,
    PagEntradaComponent,
    EntradaComponent,
    ReportComponent,
    EntradaESaidaComponent
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
    StepsModule,
    CardModule,
    RouterModule.forRoot(routes),
    InputTextModule,
    InputNumberModule,
    InputMaskModule,
    CalendarModule,
    AvatarGroupModule,
    ChartModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ConfirmPopupModule
    
    
    

    
    
    
    
  
  
  ],
  providers: [ProdutoService, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
