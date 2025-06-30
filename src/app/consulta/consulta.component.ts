import { Component } from '@angular/core';
import { Doctores } from '../models/personal';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta',
  imports: [CommonModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {

  id!: number;
  doctor!: Doctores | null;

  constructor(
    private route: ActivatedRoute, 
    private empleadosService: EmpleadosService
  ) {}

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.id = Number(params.get('id'));
    this.doctor = this.empleadosService.getById(this.id);
  });
}

}

