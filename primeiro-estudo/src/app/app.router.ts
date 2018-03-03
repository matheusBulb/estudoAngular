import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { patch } from 'webdriver-js-extender';
import { SobreComponent } from './aprendizado/sobre/sobre.component';
import { ProdutosComponent } from './aprendizado/produtos/produtos.component';
import { CobrancasComponent } from './aprendizado/cobrancas/cobrancas.component';


export const router: Routes = [
  {path:'sobre',component: SobreComponent},
  {path:'produtos', component: ProdutosComponent},
  {path:'cobrancas', component:CobrancasComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
