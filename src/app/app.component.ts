import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarDoctoresComponent } from "./listar-doctores/listar-doctores.component";

@Component({
  selector: 'app-root',
  imports: [ListarDoctoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto';
}
