import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarDoctoresComponent } from "./listar-doctores/listar-doctores.component";
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';

@Component({
  selector: 'app-root',
  imports: [ListarDoctoresComponent, AgregarEmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto';
}
