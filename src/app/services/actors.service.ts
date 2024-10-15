import { Injectable } from '@angular/core';
import { Actor } from '../models/actor.model';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor() { }

  async newActor(actor: Actor)
  {
    let path = `actors/${actor.document}`;
    setDoc(doc(getFirestore(),path),
    {
      actor: actor
    })
  }

}
