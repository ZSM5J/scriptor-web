import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
// components
import { AppComponent } from './app.component';
import { PromoPageComponent } from './components/promo-page/promo-page.component';
import { HowItWorksComponent } from './ui-templates/how-it-works/how-it-works.component';
import { HeaderComponent } from './ui-templates/header/header.component';
import { PromoMenuComponent } from './ui-templates/promo-menu/promo-menu.component';
// services
import { CustomIconsService } from "./services/custom-icons.service";
import { LanguageService } from "./services/language.service";


// ui-templates

@NgModule({
  declarations: [
    AppComponent,
    PromoPageComponent,
    HowItWorksComponent,
    HeaderComponent,
    PromoMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    MatIconModule,
    MatButtonModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [CustomIconsService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
