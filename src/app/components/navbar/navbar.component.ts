import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFirebaseService } from '../../services/auth.firebase.service';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  rooter=inject(Router)


  authSvc = inject(AuthFirebaseService)
  user:any;

  ngOnInit(): void {
    this.authSvc.user$.subscribe(user=>{
      this.user=user
    })
  }

  rootTo(path: string)
  {
    this.rooter.navigate([path])
  }

  logout(){
    this.authSvc.logout()
  }

}
