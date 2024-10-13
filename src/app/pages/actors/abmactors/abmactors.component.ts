import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-abmactors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abmactors.component.html',
  styleUrl: './abmactors.component.scss'
})
export class AbmactorsComponent implements OnInit{
  countryList!: any[];
  httpService = inject(HttpClient)

  ngOnInit(): void {
    this.getCountries().subscribe
    (
      (response) => {
        console.log("Cargado");
        //console.log('Card data:', cardData); // Do something with cardData
      },
      (error) => { 
        // Handle errors
        console.error('Error getting card:', error); 
      }
    )
  }

  getCountries()
  {
    const headers = new HttpHeaders({
      'User-Agent': 'Colmenas & Dragones', 
      Accept: '*/*' 
    });

    return this.httpService.get<any>(`https://restcountries.com/v3.1/all?fields=name,flags`, { headers: headers }).pipe(
      map(data => {

        this.countryList = data;

        return this.countryList;
         
      }),
      catchError(err => {
        console.error('Error getting random card:', err);
        return of({ 
          name: '', 
          imageUrl: '' 
        });
      })
    );
  }

}
