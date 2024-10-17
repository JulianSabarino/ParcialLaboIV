export interface Vehiculo{
    id:string,
    nombre:string | null,
    tipo:"terrestre"|"aereo"|"maritimo",
    ruedas:number | null,
    capacidad:number| null
    lista:boolean
}