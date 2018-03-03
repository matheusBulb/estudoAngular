import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CobrancasComponent } from './cobrancas/cobrancas.component';
import { SobreComponent } from './sobre/sobre.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    HomeComponent,
    ProdutosComponent,
    CobrancasComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
