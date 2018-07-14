import { Routes } from '@angular/router';
import { AuthComponent }    from './components/auth/auth.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { PromoPageComponent } from './components/promo-page/promo-page.component';

import { AuthGuardService } from './services/auth-guard.service';

export const AppRoutes: Routes = [
  {
    path: '',
    component: PromoPageComponent,
  },
  { 
    path: 'auth',
    component: AuthComponent
  },
  { 
    path: 'dashboard',
    component: DashboardComponent, 
    canActivate: [AuthGuardService]
  },
]
