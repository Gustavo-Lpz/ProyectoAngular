import { Component } from '@angular/core';
import { Doctores } from '../models/personal';
import { EmpleadosService } from '../empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  trabajador:Doctores={
    id: 0,
    nombre: "",
    especialidad: "",
    aniosExperiencia: 0,
    foto: "",
    ciudad: '',
    telefono: ''
  };

  mensajeExito:string="";
  esFemenino:boolean=false;

  constructor(private servicio:EmpleadosService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id=Number(params.get('id'));
      const encontrado = this.servicio.getById(id);
      if (encontrado!==null){
        this.trabajador= {... encontrado}; 
      }else{
        this.mensajeExito="Empleado no Encontrado";
      }
    });
  }

  actualizar():void{
    this.servicio.update(this.trabajador);
    this.mensajeExito=`Empleado con id ${this.trabajador.id} Actualizado!!!!`;

    setTimeout(  () => {
      this.mensajeExito="";
      this.router.navigate(['/actualizar']);
    },3000);
  }

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

}
