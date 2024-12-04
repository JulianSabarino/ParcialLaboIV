import { Component, inject } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo.model';
import { CommonModule } from '@angular/common';
import { VehiculosService } from '../../services/vehiculos.service';
import { TablaVehiculosComponent } from '../../components/tabla-vehiculos/tabla-vehiculos.component';
import { FormVehiculosComponent } from '../../components/form-vehiculos/form-vehiculos.component';

@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [CommonModule,
    FormVehiculosComponent,
    TablaVehiculosComponent],
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.scss'
})
export class VehiculosComponent {

  vehiculo!:Vehiculo|undefined
  vehiculoSvc = inject(VehiculosService)


  vehiculoSelec(vehiculo:Vehiculo){
    console.log(vehiculo)
    this.vehiculo = vehiculo
  }

  tareaRealizada(){
    this.vehiculo=undefined
  }
  eliminarVehiculo(){
    this.vehiculoSvc.delet(this.vehiculo?.id).finally(()=>{
      this.tareaRealizada()
    })
  }

}
