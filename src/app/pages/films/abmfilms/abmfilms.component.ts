import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Actor } from '../../../models/actor.model';
import { ActorsService } from '../../../services/actors.service';
import { Film } from '../../../models/film.model';
import { FilmsService } from '../../../services/films.service';

@Component({
  selector: 'app-abmfilms',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './abmfilms.component.html',
  styleUrl: './abmfilms.component.scss'
})
export class AbmfilmsComponent implements OnInit{
  actorList!: Actor[];
  httpService = inject(HttpClient)
  filmService = inject(FilmsService);
  actorsService = inject(ActorsService);
  selectedActor: Actor | null = null;


  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required]),
    releaseDate: new FormControl('',[Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]), // Regex for YYYY-MM-DD
    photo: new FormControl('',[Validators.required])
  })

  async ngOnInit() {
    this.actorList = await this.actorsService.getActors();
    console.log(this.actorList);
  }

  selectActor(actor: Actor)
  {
    this.selectedActor=actor;
    console.log(this.selectedActor);
  }

  createFilm()
  {
    if(this.form.valid && this.selectedActor)
    {
      let film : Film = 
      {
          id: this.form.value.name as string,
          name:this.form.value.name as string,
          type:this.form.value.type as string,
          releaseDate:this.form.value.releaseDate as string,
          photo: this.form.value.photo as string,
          viewers: 0,
          protagonist: this.selectedActor
      }
      this.filmService.newFilm(film);

    }
    else
    console.log("form invalido");
  }
}
