import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Film } from '../../models/film.model';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent implements OnInit {

  selectedFilm! :Film;
  filmService = inject(FilmsService);

  filmList!: Film[];


    async ngOnInit() {
      this.filmList = await this.filmService.getFilms();
      console.log(this.filmList);
    }
  



    selectFilm(film: Film)
    {
      this.selectedFilm = film;
    }

}
