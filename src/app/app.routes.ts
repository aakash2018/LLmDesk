import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Agent } from './agent/agent';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'agents',
        component: Agent
    }

];
