import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Binvenido a Angular';
  curso: string  = 'Curso Spring 5 con Angular 8';
  profesor: string = 'Andrés Guzman';
}
