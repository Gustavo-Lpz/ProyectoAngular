import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Doctores } from '../models/personal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-doctores',
  imports: [],
  templateUrl: './listar-doctores.component.html',
  styleUrl: './listar-doctores.component.css'
})
export class ListarDoctoresComponent {

  misDoctores!: Doctores[];
  
  

  constructor(private empleadosService: EmpleadosService) { 

  }

  ngOnInit(): void {
    this.misDoctores = this.empleadosService.getAll();
    console.log(this.empleadosService);

    let emp;
    emp= this.empleadosService.getById(1001);
    console.log(emp);
    emp= this.empleadosService.getById(1002);
    console.log(emp);

    this.empleadosService.delete(1001);
    this.empleadosService.delete(1002);


  }
}
