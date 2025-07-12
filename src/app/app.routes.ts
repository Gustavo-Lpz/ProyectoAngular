import { Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { ListarDoctoresComponent } from './listar-doctores/listar-doctores.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { EditarComponent } from './editar/editar.component';

export const routes: Routes = [
    {path: 'listar', component: ListarDoctoresComponent},
    {path: 'agregar', component: AgregarEmpleadoComponent},
    {path: 'consulta/:id', component: ConsultaComponent},
    {path: 'eliminar', component: EliminarComponent},
    {path: 'actualizar', component: ActualizarComponent},
    {path: 'editar/:id', component: EditarComponent},

    {path: '', redirectTo: 'listar', pathMatch: 'full'},
    {path: '**', redirectTo: 'listar'}
];
