import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  http = inject( HttpClient)

  getCountries(): Observable<{nombre:string, foto:string}[]> {
    return this.http.get<any[]>('https://restcountries.com/v3.1/region/europe').pipe(
      map(paises => paises.slice(0, 20).map(pais => {
        
        return {
          nombre: pais.translations.spa.official,
          foto: pais.flags.png
        }
      }))
    );
  }

  
  getForName(nombrePais:string): Observable<{nombre:string,foto:string}[]> {
    return this.http.get<any[]>('https://restcountries.com/v3.1/name/'+nombrePais.toLowerCase()).pipe(
      map(paises => paises.map(pais => { 
        return {
          nombre: pais.translations.spa.official,
          foto: pais.flags.png
        }
      }))
    );
  }

}
