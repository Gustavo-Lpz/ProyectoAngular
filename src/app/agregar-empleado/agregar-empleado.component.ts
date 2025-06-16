import { Component } from '@angular/core';
import { Doctores } from '../models/personal';
import { EmpleadosService } from '../empleados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-empleado',
  imports: [FormsModule],
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})
export class AgregarEmpleadoComponent {

  mensajeExito: string = '';

  trabajador: Doctores = {
    id: 0,
    nombre: '',
    especialidad: '',
    aniosExperiencia: 0,
    ciudad: '', 
    telefono: '',
    foto: ''
  };

  constructor(private empleadosService: EmpleadosService) { }

  esFemenino: boolean = false;

  asignarFotoAleatoria() {
    let genero;
    const id = Math.floor(Math.random() * 100);
    if (this.esFemenino) {
      genero = 'women';
    } else {
      genero = 'men';
    }
    this.trabajador.foto = `https://randomuser.me/api/portraits/${genero}/${id}.jpg`;
  }

  guardar(){
    this.empleadosService.create(this.trabajador);
    this.limpiar();
    console.log('Trabajador:', this.trabajador);
    console.log('¿Es femenino?:', this.esFemenino);
  }

  limpiar() {
    this.trabajador = {
      id: 0,
      nombre: '',
      especialidad: '',
      aniosExperiencia: 0,
      ciudad: '', 
      telefono: '',
      foto: ''
    };
    this.mensajeExito = '¡Formulario enviado exitosamente!';
    setTimeout(() => {
      this.mensajeExito = '';
    }, 3000);
  }

}