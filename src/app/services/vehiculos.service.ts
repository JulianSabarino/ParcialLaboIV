import { Injectable, inject } from '@angular/core';
import { Firestore, query,QueryDocumentSnapshot, QuerySnapshot, addDoc, collection, getFirestore, onSnapshot, deleteDoc } from '@angular/fire/firestore';
import { getStorage } from '@angular/fire/storage';
import { doc, updateDoc } from '@firebase/firestore';
import { Vehiculo } from '../models/vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private tabla = 'vehiculos'

  //firestore = inject(AngularFirestore)
  dbFirebase =inject( Firestore)
  storage = getStorage();
  

  async newData(vehiculo: Vehiculo) {

    return addDoc(collection(getFirestore(),(this.tabla)),vehiculo).then(async res=>{
      vehiculo.id = res.id
      await this.updateData(vehiculo)

      return "Vehiculo guardado con exito"
    }).catch(err=>{
      console.log(err)
    })
  }

 async  updateData(vehiculo:Vehiculo){

    const document = doc(this.dbFirebase,this.tabla,vehiculo.id)
    return await updateDoc(document,{ ...vehiculo})
  }

  getData(funcion:(vehiculos:Vehiculo[])=>void,finaly?:()=>void) {
    // Crear una consulta ordenada por el campo 'fecha' en orden ascendente
    const mensajeRef = collection(this.dbFirebase,this.tabla)
    const q = query(mensajeRef)
    
    try{
      return onSnapshot(q,(snapshot:QuerySnapshot)=>{
        let vehiculos :Vehiculo[] =[];
        snapshot.forEach((doc:QueryDocumentSnapshot)=>{
          let vehiculoIn =  doc.data() as Vehiculo
          vehiculos.push( vehiculoIn)
        })
        funcion(vehiculos)
        finaly?finaly():""
      })
    }catch(error){
      finaly?finaly():""
      return error
    }
  }

  delet(id: any) {
    return deleteDoc(doc(this.dbFirebase, this.tabla, id))
  }
}
