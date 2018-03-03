import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';
import { CobrancasComponent } from './cobrancas/cobrancas.component';

export const router: Routes = [
  { path: '',component: CobrancasComponent },
  { path: '', component: HomeComponent },
  { path:'', component:ProdutosComponent },
  {path:'', component:SobreComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
