import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'menu',
        component: MenuComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
