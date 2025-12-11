import { Component } from '@angular/core';
import { Sidebar } from '../components/sidebar/sidebar';
import { Header } from '../components/header/header';
import { Breadcrumb } from '../components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-agent',
  imports: [Sidebar,Header,Breadcrumb],
  templateUrl: './agent.html',
  styleUrl: './agent.css',
})
export class Agent {
isSidebarOpen: boolean = true;
}
