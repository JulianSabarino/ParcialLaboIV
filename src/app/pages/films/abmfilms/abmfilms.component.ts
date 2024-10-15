import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Actor } from '../../../models/actor.model';

@Component({
  selector: 'app-abmfilms',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './abmfilms.component.html',
  styleUrl: './abmfilms.component.scss'
})
export class AbmfilmsComponent {
  actorList!: Actor[];
  httpService = inject(HttpClient)
  selectedActor: Actor | null = null;

  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    surname: new FormControl('',[Validators.required]),
    document: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required,Validators.min(1)]),
    country: new FormControl('',[Validators.required])
  })

  selectActor()
  {

  }
}
