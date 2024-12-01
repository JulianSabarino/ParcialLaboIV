import { Component, Input } from '@angular/core';
import { Chofer } from '../../models/chofer.model';


@Component({
  selector: 'app-detalle-repartidor',
  standalone: true,
  imports: [],
  templateUrl: './detalle-repartidor.component.html',
  styleUrl: './detalle-repartidor.component.css'
})
export class DetalleRepartidorComponent {
  @Input() repartidor!:Chofer;

}
