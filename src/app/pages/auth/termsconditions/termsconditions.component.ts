import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilsService } from '../../../services/utils.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termsconditions',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './termsconditions.component.html',
  styleUrl: './termsconditions.component.scss'
})
export class TermsconditionsComponent {

  //spinner = inject(NgxSpinnerService);
  utilSvc = inject(UtilsService)
  toastr = inject(ToastrService);
  rooter = inject(Router)

  valueChecked: boolean = false
  formSubmitted: boolean = false;



  form = new FormGroup({
    age: new FormControl('',[Validators.required,Validators.min(18),Validators.max(65)])
  })

  async sendTyC()
  {

    if(this.form.valid && this.valueChecked == true)
    {
      try
      {
        this.toastr.success("Se cargo con exito","Exito");
        this.formSubmitted = true;
      }
      catch
      {
        this.toastr.error("Error al cargar","Error");
      }

    }
    else
    {
      console.log("error en el form")
    }

  }



  showChecked()
  {
    if(this.valueChecked)
      this.valueChecked = false
    else
      this.valueChecked = true;

    console.log(this.valueChecked);
  }


  gotoHome()
  {
    this.rooter.navigate(["home"])
  }

}
