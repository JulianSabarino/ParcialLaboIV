import { Component, EventEmitter, Output, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent {

  @Output() paisElegido = new EventEmitter<any>();
  paisesSvc = inject(PaisesService)

  paises:any =[]
  paisesBackUp= [
    {
        "nombre": "Moldova",
        "foto": "https://flagcdn.com/w320/md.png"
    },
    {
        "nombre": "United States",
        "foto": "https://flagcdn.com/w320/us.png"
    },
    {
        "nombre": "Mayotte",
        "foto": "https://flagcdn.com/w320/yt.png"
    },
    {
        "nombre": "Nauru",
        "foto": "https://flagcdn.com/w320/nr.png"
    },
    {
        "nombre": "Mozambique",
        "foto": "https://flagcdn.com/w320/mz.png"
    },
    {
        "nombre": "Brazil",
        "foto": "https://flagcdn.com/w320/br.png"
    },
    {
        "nombre": "Cape Verde",
        "foto": "https://flagcdn.com/w320/cv.png"
    },
    {
        "nombre": "Equatorial Guinea",
        "foto": "https://flagcdn.com/w320/gq.png"
    },
    {
        "nombre": "Albania",
        "foto": "https://flagcdn.com/w320/al.png"
    },
    {
        "nombre": "United States Virgin Islands",
        "foto": "https://flagcdn.com/w320/vi.png"
    },
    {
        "nombre": "Niue",
        "foto": "https://flagcdn.com/w320/nu.png"
    },
    {
        "nombre": "Palau",
        "foto": "https://flagcdn.com/w320/pw.png"
    },
    {
        "nombre": "Nigeria",
        "foto": "https://flagcdn.com/w320/ng.png"
    },
    {
        "nombre": "British Virgin Islands",
        "foto": "https://flagcdn.com/w320/vg.png"
    },
    {
        "nombre": "Gambia",
        "foto": "https://flagcdn.com/w320/gm.png"
    },
    {
        "nombre": "Somalia",
        "foto": "https://flagcdn.com/w320/so.png"
    },
    {
        "nombre": "Yemen",
        "foto": "https://flagcdn.com/w320/ye.png"
    },
    {
        "nombre": "Malaysia",
        "foto": "https://flagcdn.com/w320/my.png"
    },
    {
        "nombre": "Dominica",
        "foto": "https://flagcdn.com/w320/dm.png"
    },
    {
        "nombre": "United Kingdom",
        "foto": "https://flagcdn.com/w320/gb.png"
    }
]
  ngOnInit(): void {


    /*next?: ((value: { nombre: string; foto: string; }[]) => void) | null | undefined, 
    error?: ((error: any) => void) | null | undefined, 
    complete?*/
    this.paisesSvc.getCountries().subscribe(
      response => { 
        console.log(response)
        this.paises = response

      },
      (error) => { 

        this.paises = this.paisesBackUp

       }
      );
   
  }

  seleccionarPais(pais:any){
    this.paisElegido.emit(pais)
  }
}
