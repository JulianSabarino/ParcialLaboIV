import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Vehiculo } from '../../models/vehiculo.model';
import { HeladosServices } from '../../services/helados.service';


@Component({
  selector: 'app-form-helados',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-helados.component.html',
  styleUrl: './form-helados.component.css'
})
export class FormHeladosComponent {


  @Input() helado!:Vehiculo;
  @Output() tareaRealizada = new EventEmitter<any>();

  tipoForm ="Agregar helado"
  heladoSvc = inject(HeladosServices)
  imagen :any;

  form= new FormGroup ({
    nombre: new FormControl('',[Validators.required]),
    tipo: new FormControl('',[Validators.required]),
    ruedas: new FormControl('',[Validators.required,Validators.max(6)]),
    capacidad: new FormControl('',[Validators.required,Validators.min(2),Validators.max(100)])
  })


  ngOnInit():void{
    if(this.helado){
      this.tipoForm = "Modificar helado"
      this.form.patchValue({
        nombre: this.helado.nombre,
        tipo: this.helado.tipo,
        ruedas: this.helado.ruedas?.toString(),
        capacidad: this.helado.capacidad?.toString()
        //imagen:this.pelicula.src_foto
      });
      
    }
  }


  submit(){
  
    const nuevoActor:Vehiculo ={
      nombre:this.form.value.nombre  as string,
      //@ts-ignore
      tipo:this.form.value.tipo  as string,
      ruedas: parseInt(this.form.value.ruedas as string),
      capacidad: parseInt(this.form.value.capacidad as string),
      lista:false,
      id:"",
    }

    if(this.helado){
      nuevoActor.id = this.helado.id
      this.heladoSvc.updateData(nuevoActor as Vehiculo).then(()=>this.tareaRealizada.emit())
    }else{
      this.heladoSvc.newData(nuevoActor as Vehiculo).then(()=>this.tareaRealizada.emit())
    }

    this.form.reset()
  }

}
