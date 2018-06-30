import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
// components
import { AppComponent } from './app.component';
import { PromoPageComponent } from './components/promo-page/promo-page.component';
// services

// ui-templates


@NgModule({
  declarations: [
    AppComponent,
    PromoPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
