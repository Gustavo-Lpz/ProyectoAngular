import { Component } from '@angular/core';
import { Doctores } from '../models/personal';
import { EmpleadosService } from '../empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  imports: [],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent {

  empleados: Doctores[] = [];

  constructor(private servicio:EmpleadosService, private router: Router){}

  ngOnInit(): void{
    this.empleados = this.servicio.getAll();
  }

  irAEditar(id:number){
    this.router.navigate(['/editar', id]);
  }

}
