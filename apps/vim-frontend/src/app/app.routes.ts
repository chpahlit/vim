import { Route } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginComponent } from './login/login.component';
export const appRoutes: Route[] = [
  {
    path: '',
    component: WelcomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
