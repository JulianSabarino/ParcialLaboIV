import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormHeladosComponent } from '../../components/form-vehiculo/form-helados.component';
import { Vehiculo } from '../../models/vehiculo.model';
import { HeladosServices } from '../../services/helados.service';
import { TablaHeladosComponent } from '../../components/tabla-helados/tabla-helados.component';


@Component({
  selector: 'app-helados',
  standalone: true,
  imports: [CommonModule,
    FormHeladosComponent,
    TablaHeladosComponent
  ],
  templateUrl: './helados.component.html',
  styleUrl: './helados.component.css'
})
export class HeladosComponent {
  helado!:Vehiculo|undefined
  heladoSvc = inject(HeladosServices)


  heladoSelec(helado:Vehiculo){
    this.helado = helado
  }

  tareaRealizada(){
    this.helado=undefined
  }
  eliminarHelado(){
    this.heladoSvc.delet(this.helado?.id).finally(()=>{
      this.tareaRealizada()
    })
  }
}
