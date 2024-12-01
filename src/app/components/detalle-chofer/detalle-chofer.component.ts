import { Component, Input } from '@angular/core';
import { Chofer } from '../../models/chofer.model';

@Component({
  selector: 'app-detalle-chofer',
  standalone: true,
  imports: [],
  templateUrl: './detalle-chofer.component.html',
  styleUrl: './detalle-chofer.component.scss'
})
export class DetalleChoferComponent {
  @Input() chofer!:Chofer;

}
