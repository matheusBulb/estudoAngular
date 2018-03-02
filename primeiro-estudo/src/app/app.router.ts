import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './pages/about/about.component';

export const router: Routes = [
  { path: '', component: IndexComponent },
  { path: 'sobre', component: AboutComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
