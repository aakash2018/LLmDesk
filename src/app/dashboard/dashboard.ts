import { Component } from '@angular/core';
import { Sidebar } from '../components/sidebar/sidebar';
import { Header } from '../components/header/header';
import { Breadcrumb } from '../components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar,Header,Breadcrumb],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
