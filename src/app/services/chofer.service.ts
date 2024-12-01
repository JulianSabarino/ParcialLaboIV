import { Injectable, inject } from '@angular/core';
import { Firestore, query,QueryDocumentSnapshot, QuerySnapshot, addDoc, collection, getFirestore, onSnapshot, orderBy, where, getDocs } from '@angular/fire/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from '@angular/fire/storage';
import { doc, updateDoc } from '@firebase/firestore';
import { Chofer } from '../models/chofer.model';

@Injectable({
  providedIn: 'root'
})
export class ChoferesServices {

  private tabla = 'chofer'

  //firestore = inject(AngularFirestore)
  dbFirebase =inject( Firestore)
  storage = getStorage();
  

  async newData(chofer: Chofer) {

    const retorno ={estado:false, mensaje:"No se cargo el chofer, error inesperado"}
    if(await this.existeDni(chofer.dni)){
      retorno.estado =false
      retorno.mensaje ="Ya existe un chofer con este DNI"
      return retorno
    }

    return addDoc(collection(getFirestore(),(this.tabla)),chofer).then(async res=>{
      chofer.id = res.id
      await this.updateData(chofer)

      retorno.estado=true
      retorno.mensaje ="chofer guardado con exito"
      return retorno
    }).catch(err=>{
      retorno.mensaje= err.message
      return retorno
    })
  }

 async  updateData(chofer:Chofer){

    const document = doc(this.dbFirebase,this.tabla,chofer.id)
    return await updateDoc(document,{ ...chofer})
  }

  getData(funcion:(choferes:Chofer[])=>void,finaly?:()=>void) {
    // Crear una consulta ordenada por el campo 'fecha' en orden ascendente
    const mensajeRef = collection(this.dbFirebase,this.tabla)
    const q = query(mensajeRef,orderBy('fecha_nacimiento'))
    
    try{
      return onSnapshot(q,(snapshot:QuerySnapshot)=>{
        let choferes :Chofer[] =[];
        snapshot.forEach((doc:QueryDocumentSnapshot)=>{
          let choferIn =  doc.data() as Chofer
          choferes.push( choferIn)
        })
        funcion(choferes)
        finaly?finaly():""
      })
    }catch(error){
      finaly?finaly():""
      return error
    }
  }


  async existeDni(dni:string):Promise<boolean>{
    const mensajeRef = collection(this.dbFirebase,this.tabla)
      const q = query(mensajeRef,where("dni",'==',dni))

      const snapshot = await getDocs(q);
      return snapshot.docs.length !== 0;
  }
}
