import { Component, inject, OnInit } from '@angular/core';
import { Actor } from '../../models/actor.model';
import { ActorsService } from '../../services/actors.service';
import { CommonModule } from '@angular/common';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.scss'
})
export class ActorsComponent implements OnInit {

  actorList!: Actor[];
  actorsService = inject(ActorsService);
  filmService = inject(FilmsService);
  filmList!: Film[];

  selectedActor!: Actor;
  selectedFilmList!: Film[];

  async ngOnInit() {
    this.actorList = await this.actorsService.getActors();
    console.log(this.actorList);
    this.filmList = await this.filmService.getFilms();
    console.log(this.filmList);
  }

  selectActor(actor : Actor)
  {
    this.selectedActor = actor;
    console.log(this.selectedActor);
    this.selectedFilmList = this.filmList.filter(film => film.protagonist.document === this.selectedActor.document);

  }

}
