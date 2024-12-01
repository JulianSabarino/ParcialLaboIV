import { Component } from '@angular/core';
import { TablaPaisesComponent } from '../../components/tabla-paises/tabla-paises.component';
import { FormRepartidorComponent } from '../../components/form-repartidor/form-repartidor.component';
import { FormChoferComponent } from '../../components/form-chofer/form-chofer.component';


@Component({
  selector: 'app-alta',
  standalone: true,
  imports: [TablaPaisesComponent,FormChoferComponent],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  paisSelec=""

  pais(pais:any){
    this.paisSelec=pais
  }
}
