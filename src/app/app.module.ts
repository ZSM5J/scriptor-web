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
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
// services
import { CustomIconsService } from "./services/custom-icons.service";
import { LanguageService } from "./services/language.service";
import { FituresComponent } from './ui-templates/fitures/fitures.component';
import { SessionService } from './services/session.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ApiService } from './services/api.service';

// ui-templates
import { HowItWorksComponent } from './ui-templates/how-it-works/how-it-works.component';
import { HeaderComponent } from './ui-templates/header/header.component';
import { PromoMenuComponent } from './ui-templates/promo-menu/promo-menu.component';
import { ScreenBlockComponent } from './ui-templates/screen-block/screen-block.component';

@NgModule({
  declarations: [
    AppComponent,
    PromoPageComponent,
    HowItWorksComponent,
    HeaderComponent,
    PromoMenuComponent,
    ScreenBlockComponent,
    FituresComponent,
    AuthComponent,
    DashboardComponent
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
  providers: [CustomIconsService, LanguageService, AuthGuardService, SessionService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
