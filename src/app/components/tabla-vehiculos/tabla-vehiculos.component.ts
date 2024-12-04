import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo.model';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-tabla-vehiculos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-vehiculos.component.html',
  styleUrl: './tabla-vehiculos.component.scss'
})
export class TablaVehiculosComponent implements OnInit{

  @Output() vehiculoElegido = new EventEmitter<Vehiculo>();

  @Input()vehiculos! : Vehiculo[] |[];

  vehiculoSvc = inject(VehiculosService)

  ngOnInit(): void {
    if(!this.vehiculos){
      this.vehiculoSvc.getData(vehiculos =>{
        this.vehiculos = vehiculos
      })
    }
  }
  

  seleccionarPelicula(vehiculo:Vehiculo){

    this.vehiculoElegido.emit(vehiculo)
  }

}
