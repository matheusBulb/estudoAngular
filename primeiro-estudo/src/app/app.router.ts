import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TestComponent } from './page/test/test.component';
import { EventComponent } from './page/event/event.component';
import { SponsorsComponent } from './page/sponsors/sponsors.component';
import { SignupComponent } from './page/signup/signup.component';

export const router: Routes = [
  {path:'',component: IndexComponent},
  {path:'provas',component: TestComponent},
  {path:'evento',component: EventComponent},
  {path:'patrocinadores',component: SponsorsComponent},
  {path:'inscricoes',component:SignupComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
