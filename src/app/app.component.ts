import { Component } from '@angular/core';
import { ESTUDIANTES } from './mock-estudiantes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Estudiantes';
  estudiantes = ESTUDIANTES;
}
