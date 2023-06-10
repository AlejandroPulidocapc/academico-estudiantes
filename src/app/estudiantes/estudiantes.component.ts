
import { Component } from '@angular/core';
import { Estudiante } from '../estudiante';
import { ESTUDIANTES} from '../mock-estudiantes';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})

export class HeroesComponent {

  estudiantes = ESTUDIANTES;
  selectedEstudiante?: Estudiante;

  onSelect(hero: Estudiante): void {
    this.selectedEstudiante = hero;
  }
}