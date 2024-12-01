import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Chofer } from '../../models/chofer.model';
import { ChoferesServices } from '../../services/chofer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-chofer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-chofer.component.html',
  styleUrl: './tabla-chofer.component.scss'
})
export class TablaChoferComponent {

  @Output() choferElegido = new EventEmitter<Chofer>();
  @Input() tablaMin:boolean=false

  @Input()choferes! : Chofer[] |[];

  choferesSvc = inject(ChoferesServices)

 
  ngOnInit(): void {
    if(!this.choferes){
      this.choferesSvc.getData(choferes =>{
        this.choferes = choferes
      })
    }}

    seleccionarChofer(chofer:Chofer){
      this.choferElegido.emit(chofer)
    }

}
