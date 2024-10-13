import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent {

  selectedFilm! :Film;

  filmList: Film[] = 
    [
      {
        id:"1",
        name:"Shrek",
        type:"Comedy",
        releaseDate:"1/1/2021",
        viewers: 72,
        photo: "//es.web.img3.acsta.net/pictures/14/03/06/10/13/369709.jpg",
        protagonist: {
          name: "Shrek",
          surname: "The Ogre",
          document: "dunno",
          age: 35,
          country: "Far Far Away",
        }
      },
      {
        id:"2",
        name:"Shrek 2",
        type:"Comedy",
        releaseDate:"1/1/2021",
        viewers: 72,
        photo: "//es.web.img3.acsta.net/pictures/14/03/06/10/13/369709.jpg",
        protagonist: {
          name: "Shrek",
          surname: "The Ogre",
          document: "dunno",
          age: 35,
          country: "Far Far Away",
        }
      },
      {
        id:"3",
        name:"Shrek Third",
        type:"Comedy",
        releaseDate:"1/1/2021",
        viewers: 72,
        photo: "//es.web.img3.acsta.net/pictures/14/03/06/10/13/369709.jpg",
        protagonist: {
          name: "Shrek",
          surname: "The Ogre",
          document: "dunno",
          age: 35,
          country: "Far Far Away",
        }
      },
      {
        id:"2",
        name:"Shrek Forever After",
        type:"Comedy",
        releaseDate:"1/1/2021",
        viewers: 72,
        photo: "//es.web.img3.acsta.net/pictures/14/03/06/10/13/369709.jpg",
        protagonist: {
          name: "Shrek",
          surname: "The Ogre",
          document: "dunno",
          age: 35,
          country: "Far Far Away",
        }
      }
    ]


    selectFilm(film: Film)
    {
      this.selectedFilm = film;
    }

}
