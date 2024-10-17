import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehiculo } from '../../models/vehiculo.model';
import { HeladosServices } from '../../services/helados.service';


@Component({
  selector: 'app-tabla-helados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-helados.component.html',
  styleUrl: './tabla-helados.component.css'
})
export class TablaHeladosComponent {

  @Output() heladoElegido = new EventEmitter<Vehiculo>();

  @Input()helados! : Vehiculo[] |[];

  heladoSvc = inject(HeladosServices)

  ngOnInit(): void {
    if(!this.helados){
      this.heladoSvc.getData(helados =>{
        this.helados = helados
      })
    }
  }
  

  seleccionarPelicula(helado:Vehiculo){

    this.heladoElegido.emit(helado)
  }

}
