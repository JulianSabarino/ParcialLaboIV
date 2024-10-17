import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthFirebaseService } from '../../services/auth.firebase.service';
import { UtilsService } from '../../services/utils.service';


@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {

  @Input() pathRegistro!:string;
  @Input() pathExito!:string;
 
  authFirebase = inject(AuthFirebaseService)
  utilSvc = inject(UtilsService)

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  async submit() {

    await this.authFirebase.login(this.form.value.email!, this.form.value.password!, () => {
      this.utilSvc.goto(this.pathExito)
     
    })


    //const res = this.localStorage.login(this.formLogin.value)?"usuario logeado":"no se encontro el usuario"
  }

  accesoRapido(email: string, password: string) {
    this.form.patchValue({
      email: email,
      password: password
    });
  }
}
