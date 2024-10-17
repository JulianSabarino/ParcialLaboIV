import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  httpService = inject(HttpClient)
  myProfile: any;

  ngOnInit(): void {
    this.getMe().subscribe
    (
      (response) => {
        console.log(response);
        //console.log('Card data:', cardData); // Do something with cardData
      },
      (error) => { 
        // Handle errors
        console.error('Error getting card:', error); 
      }
    );
  }


  getMe()
  {
    const headers = new HttpHeaders({
      'User-Agent': 'Colmenas & Dragones', 
      Accept: '*/*' 
    });

    return this.httpService.get<any>(`https://api.github.com/users/JulianSabarino`, { headers: headers }).pipe(
      map(data => {

        this.myProfile = data;
        console.log(this.myProfile);
        return data;
         
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
