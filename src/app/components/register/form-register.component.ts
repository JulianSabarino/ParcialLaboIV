import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthFirebaseService } from '../../services/auth.firebase.service';
import { UtilsService } from '../../services/utils.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {

  @Input() pathExito!:string;
  @Input() pathRegistro!:string;
 
  authFirebase = inject(AuthFirebaseService)
  utilSvc = inject(UtilsService)

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    nombre: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  async submit() {
    const user= {
      nombre:this.form.value.nombre,
      email:this.form.value.email,
      rol:"empleado"
    }
   
    await this.authFirebase.register(user as User, this.form.value.password!, () => {
      this.utilSvc.goto(this.pathExito)
    
    })

    //const res = this.localStorage.login(this.formLogin.value)?"usuario logeado":"no se encontro el usuario"
  }


}
