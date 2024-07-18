import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { VisuprodComponent } from './pages/visuprod/visuprod.component';

  const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },

    { path: 'index', component: IndexComponent },
    
    { path: 'visuprod/:id', component: VisuprodComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
