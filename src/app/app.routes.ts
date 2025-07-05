import { Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { ListarDoctoresComponent } from './listar-doctores/listar-doctores.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EliminarComponent } from './eliminar/eliminar.component';

export const routes: Routes = [
    {path: 'listar', component: ListarDoctoresComponent},
    {path: 'agregar', component: AgregarEmpleadoComponent},
    {path: 'consulta/:id', component: ConsultaComponent},
    {path: 'eliminar', component: EliminarComponent},
    {path: '', redirectTo: 'listar', pathMatch: 'full'},
    {path: '**', redirectTo: 'listar'}
];
