import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Chofer } from '../../models/chofer.model';
import { ChoferesServices } from '../../services/chofer.service';


@Component({
  selector: 'app-form-repartidor',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-repartidor.component.html',
  styleUrl: './form-repartidor.component.css'
})
export class FormRepartidorComponent {
  @Input() repartidor!:Chofer;
  @Input() pais:any;
  @Output() tareaRealizada = new EventEmitter<any>();

  tipoForm ="Agregar repartidor"
  repartidorSvc = inject(ChoferesServices)
 
  imagen :any;

  esProfesional: boolean = false;

  ngOnInit():void{
    if(this.repartidor){
      this.tipoForm = "Modificar repartidor"
      this.pais = this.repartidor.pais_origen as string
      this.form.patchValue({
        nombre: this.repartidor.nombre,
        pais: this.repartidor.pais_origen,
        nacimiento: this.repartidor.fecha_nacimiento,
        //imagen:this.pelicula.src_foto
      });
      
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.form.controls.pais.setValue(this.pais.nombre, { emitEvent: false });
  }



  form= new FormGroup ({
    nombre: new FormControl('',[Validators.required]),
    pais: new FormControl('',[Validators.required]),
    nacimiento: new FormControl('',[Validators.required]),
    dni: new FormControl('',[Validators.required]),
    licencia: new FormControl('',[Validators.required,Validators.min(999999),Validators.max(9999999)])
  })


  submit(){
  
    const nuevoActor:Chofer ={
      nombre:this.form.value.nombre  as string,
      fecha_nacimiento:this.form.value.nacimiento  as string,
      pais_origen:this.form.value.pais  as string,
      numero_licencia: parseInt(this.form.value.licencia as string),
      dni:this.form.value.dni as string,
      apto_profesional:this.esProfesional,
      id:"",
      url_foto_pais:this.pais.foto
    }

    if(this.repartidor){
      nuevoActor.id = this.repartidor.id
      this.repartidorSvc.updateData(nuevoActor as Chofer).then(()=>this.tareaRealizada.emit())
    }else{
      this.repartidorSvc.newData(nuevoActor as Chofer).then((data)=>{
        if(data.estado){

        }else{

        }
        this.tareaRealizada.emit()
      }
    )
    }

    this.form.reset()
  }


  Profesional()
  {
    this.esProfesional = !this.esProfesional;
  }

}
