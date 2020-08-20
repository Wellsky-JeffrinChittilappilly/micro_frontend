import { APP_BASE_HREF } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { Home } from './home.component.ts';

const appRoutes: Routes = [
];

enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {}),
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/home'}],
  declarations: [
    Home,
  ],
  bootstrap: [Home]
})
export default class MainModule {
}
