import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, map, of } from 'rxjs';
import { ActorsService } from '../../../services/actors.service';
import { Actor } from '../../../models/actor.model';

@Component({
  selector: 'app-abmactors',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './abmactors.component.html',
  styleUrl: './abmactors.component.scss'
})
export class AbmactorsComponent implements OnInit{
  
  countryList!: any[];
  httpService = inject(HttpClient)
  actorsService = inject(ActorsService);
  selectedCountry: string | null = null;

  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    surname: new FormControl('',[Validators.required]),
    document: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required,Validators.min(1)]),
  })

  ngOnInit(): void {
    this.getCountries().subscribe
    (
      (response) => {
        this.countryList.sort((a, b) => a.name.common.localeCompare(b.name.common))
        console.log(response);
        //console.log('Card data:', cardData); // Do something with cardData
      },
      (error) => { 
        // Handle errors
        console.error('Error getting card:', error); 
      }
    );
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

  selectCountry(country: string)
  {
    this.selectedCountry = country;
    console.log(country);
  }

  createActor()
  {
    if(this.form.valid)
    {
      let actor : Actor = 
      {
        name: this.form.value.name as string,
        surname: this.form.value.surname as string,
        document: this.form.value.document as string,
        age: Number(this.form.value.age),
        country: this.selectedCountry as string
      }
      this.actorsService.newActor(actor);

    }
    else
    console.log("form invalido");
  }

}
