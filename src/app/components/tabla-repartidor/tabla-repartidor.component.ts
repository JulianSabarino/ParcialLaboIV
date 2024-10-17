import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepartidorServices } from '../../services/repartidor.service';
import { Repartidor } from '../../models/repartidor.model';


@Component({
  selector: 'app-tabla-repartidor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-repartidor.component.html',
  styleUrl: './tabla-repartidor.component.css'
})
export class TablaRepartidorComponent {

  @Output() peliculaElegida = new EventEmitter<Repartidor>();
  @Input() tablaMin:boolean=false

  @Input()repartidores! : Repartidor[] |[];

  repartidorSvc = inject(RepartidorServices)

 
  ngOnInit(): void {
    if(!this.repartidores){
      this.repartidorSvc.getData(repartidores =>{
        this.repartidores = repartidores
      })
    }}

    seleccionarRepartidor(repartidor:Repartidor){
      this.peliculaElegida.emit(repartidor)
    }
}
