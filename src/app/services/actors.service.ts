import { Injectable } from '@angular/core';
import { Actor } from '../models/actor.model';
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private firestore: Firestore) { }

  async newActor(actor: Actor)
  {
    let path = `actors/${actor.document}`;
    await setDoc(doc(getFirestore(),path),
    {
      actor: actor
    })
  }

  async getActors()
  {
    let path = `actors`;
    //return (await getDocs(collection(getFirestore(),path)));

    let data = await getDocs(collection(getFirestore(),path));

    const actorList: Actor[] = data.docs.map(doc => ({
      ...(doc.data()['actor'] as Actor), // Destructure the actor data from Firestore
      document: doc.id,      // Use the document ID as the 'document' field
    })  
  );
    
    return actorList;

  }

}
