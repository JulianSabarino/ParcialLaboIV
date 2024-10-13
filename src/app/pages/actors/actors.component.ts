import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.scss'
})
export class ActorsComponent {
  rootService = inject(Router);

  moveTo()
  {
    this.rootService.navigate(["./abm"]);
  }
}
