import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DetalleRepartidorComponent } from '../detalle-repartidor/detalle-repartidor.component';
import { TablaRepartidorComponent } from '../tabla-repartidor/tabla-repartidor.component';
import { FormRepartidorComponent } from '../form-repartidor/form-repartidor.component';
import { DetallePaisComponent } from '../detalle-pais/detalle-pais.component';
import { Repartidor } from '../../models/repartidor.model';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [DetalleRepartidorComponent,
    TablaRepartidorComponent,
    FormRepartidorComponent,
    CommonModule,
    DetallePaisComponent
  ],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  repartidorSelc!:Repartidor
  paisRepartidor:any;
  repartidorSeleccionado(repartidor:Repartidor){
    this.repartidorSelc = repartidor
    this.paisRepartidor={
      nombre:repartidor.pais_origen,
      foto:repartidor.url_foto_pais
    }
  
  }
}
