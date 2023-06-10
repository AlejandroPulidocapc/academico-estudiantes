
import { Estudiante } from '../estudiante';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estudiante-detail',
  templateUrl: './estudiante-detail.component.html',
  styleUrls: ['./estudiante-detail.component.css']
})
export class EstudianteDetailComponent {
  @Input() estudiante?: Estudiante;

}

