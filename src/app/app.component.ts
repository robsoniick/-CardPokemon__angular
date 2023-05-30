import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Aula de Service</h1>
  <router-outlet></router-outlet>
  <app-card></app-card>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){

  }

  ngOnInit(): void {}
  title = 'SERVICES';
}
