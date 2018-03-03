import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TestComponent } from './page/test/test.component';
import { EventComponent } from './page/event/event.component';
import { SponsorsComponent } from './page/sponsors/sponsors.component';
import { SignupComponent } from './page/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TestComponent,
    EventComponent,
    SponsorsComponent,
    SignupComponent,
  ],

  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
