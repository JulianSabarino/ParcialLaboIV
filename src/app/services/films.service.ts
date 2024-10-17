import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';
import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor() { }
  
  async newFilm(film: Film)
  {
    let path = `films/${film.id}`;
    await setDoc(doc(getFirestore(),path),
    {
      film: film
    })
  }

  async getFilms()
  {
    let path = `films`;
    //return (await getDocs(collection(getFirestore(),path)));

    let data = await getDocs(collection(getFirestore(),path));

    const filmList: Film[] = data.docs.map(doc => ({
      ...(doc.data()['film'] as Film), // Destructure the actor data from Firestore
      id: doc.id,      // Use the document ID as the 'document' field
    })  
  );
    
    return filmList;

  }

}
