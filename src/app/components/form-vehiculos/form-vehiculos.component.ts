import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Vehiculo } from '../../models/vehiculo.model';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-form-vehiculos',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-vehiculos.component.html',
  styleUrl: './form-vehiculos.component.scss'
})
export class FormVehiculosComponent implements OnInit, OnChanges{

  
  @Input() vehiculo!:Vehiculo;
  @Output() tareaRealizada = new EventEmitter<any>();

  tipoForm ="Agregar Vehiculo"
  vehiculoSvc = inject(VehiculosService)
  imagen :any;

  form= new FormGroup ({
    nombre: new FormControl('',[Validators.required]),
    tipo: new FormControl('',[Validators.required]),
    ruedas: new FormControl('',[Validators.required,Validators.max(6)]),
    capacidad: new FormControl('',[Validators.required,Validators.min(2),Validators.max(100)])
  })


  ngOnInit():void{
    if(this.vehiculo){
      this.tipoForm = "Modificar Vehiculo"
      this.form.patchValue({
        nombre: this.vehiculo.nombre,
        tipo: this.vehiculo.tipo,
        ruedas: this.vehiculo.ruedas?.toString(),
        capacidad: this.vehiculo.capacidad?.toString()
        //imagen:this.pelicula.src_foto
      });
      
    }
  }

  ngOnChanges(changes: SimpleChanges)
  {
    if (changes['vehiculo'] && changes['vehiculo'].currentValue) {
      this.tipoForm = "Modificar Vehiculo";
      this.form.patchValue({
        nombre: this.vehiculo.nombre,
        tipo: this.vehiculo.tipo,
        ruedas: this.vehiculo.ruedas?.toString(),
        capacidad: this.vehiculo.capacidad?.toString()
      });
      // You might need to mark controls as touched if you want validation messages to appear immediately
      this.form.markAsTouched();
    } else {
      this.tipoForm = "Agregar Vehiculo"; //Reset if vehiculo is undefined
      this.form.reset(); //Reset the form
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

    if(this.vehiculo){
      nuevoActor.id = this.vehiculo.id
      this.vehiculoSvc.updateData(nuevoActor as Vehiculo).then(()=>this.tareaRealizada.emit())
    }else{
      this.vehiculoSvc.newData(nuevoActor as Vehiculo).then(()=>this.tareaRealizada.emit())
    }

    this.form.reset()
  }

}
