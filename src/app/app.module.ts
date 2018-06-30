import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { MatIconModule } from "@angular/material/icon";
// components
import { AppComponent } from './app.component';
import { PromoPageComponent } from './components/promo-page/promo-page.component';
import { HowItWorksComponent } from './ui-templates/how-it-works/how-it-works.component';
// services
import { CustomIconsService } from "./services/custom-icons.service";
// ui-templates

@NgModule({
  declarations: [
    AppComponent,
    PromoPageComponent,
    HowItWorksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    MatIconModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [CustomIconsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
