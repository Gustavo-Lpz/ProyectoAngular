import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Doctores } from '../models/personal';

@Component({
  selector: 'app-eliminar',
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit{

  mensajeEliminado:string="";
  timeoutId:any;

  empleados: Doctores [] = [];

  constructor(private servicio:EmpleadosService){}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.empleados=this.servicio.getAll();
  }

  eliminarEmpleado(id:number){
    this.servicio.delete(id);
    console.log(`Empleado con Id ${id} eliminado`);
    this.cargarEmpleados();
    this.mensajeEliminado= `Empleado con id ${id} Eliminado`;
    
    clearTimeout(this.timeoutId);

    this.timeoutId=setTimeout(() => {
        this.mensajeEliminado=""
    },3000); 
  }



}
