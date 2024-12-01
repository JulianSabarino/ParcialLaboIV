import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoferesServices } from '../../services/chofer.service';
import { Chofer } from '../../models/chofer.model';


@Component({
  selector: 'app-tabla-repartidor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-repartidor.component.html',
  styleUrl: './tabla-repartidor.component.css'
})
export class TablaRepartidorComponent {

  @Output() peliculaElegida = new EventEmitter<Chofer>();
  @Input() tablaMin:boolean=false

  @Input()repartidores! : Chofer[] |[];

  repartidorSvc = inject(ChoferesServices)

 
  ngOnInit(): void {
    if(!this.repartidores){
      this.repartidorSvc.getData(repartidores =>{
        this.repartidores = repartidores
      })
    }}

    seleccionarRepartidor(repartidor:Chofer){
      this.peliculaElegida.emit(repartidor)
    }
}
