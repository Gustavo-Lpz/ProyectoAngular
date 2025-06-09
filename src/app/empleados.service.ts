import { Injectable } from '@angular/core';
import plantilla from './data/plantilla.json';
import { Doctores } from './models/personal';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados: Doctores[] = plantilla;

  constructor() { }

  ngOnInit(): void {
    
}

getAll(): Doctores[] {
  const recuperarDatos: Doctores[] = JSON.parse(localStorage.getItem('empleados') || '[]');
  if (recuperarDatos.length > 0) {
    this.empleados = recuperarDatos;
  }
  return this.empleados;
}

getById(id: number): Doctores | null {
  const econtrado = this.empleados.find(e => e.id === id);
  return econtrado || null;
}

create(empleado: Doctores): void {
  this.empleados.push(empleado);
}

update(id: number, empleado: Partial<Doctores>): void {
  const index = this.empleados.findIndex(e => e.id === id);
  if (index !== -1) {
    this.empleados[index] = { ...this.empleados[index], ...empleado };
  }
}

delete(id: number): void {
  const index = this.empleados.findIndex(e => e.id === id);
  if (index !== -1) {
    this.empleados.splice(index, 1);
    localStorage
   }
  }
}