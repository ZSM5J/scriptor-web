import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FigureComponent } from './figure/figure.component';
import { PlayerComponent } from './player/player.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './auth.guard';


export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'figures/:id',
    component: FigureComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'players/:token',
    component: PlayerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
]
