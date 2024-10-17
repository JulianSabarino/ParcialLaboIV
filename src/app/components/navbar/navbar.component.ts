import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  rooter=inject(Router)


  rootTo(path: string)
  {
    this.rooter.navigate([path])
  }

}
