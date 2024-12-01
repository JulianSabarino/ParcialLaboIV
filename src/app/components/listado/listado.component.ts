import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DetallePaisComponent } from '../detalle-pais/detalle-pais.component';
import { Chofer } from '../../models/chofer.model';
import { DetalleChoferComponent } from '../detalle-chofer/detalle-chofer.component';
import { TablaChoferComponent } from '../tabla-chofer/tabla-chofer.component';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [
    TablaChoferComponent,
    CommonModule,
    DetallePaisComponent,
    DetalleChoferComponent
  ],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  choferSelc!:Chofer
  paischofer:any;
  choferSeleccionado(chofer:Chofer){
    this.choferSelc = chofer
    this.paischofer={
      nombre:chofer.pais_origen,
      foto:chofer.url_foto_pais
    }
  
  }
}
