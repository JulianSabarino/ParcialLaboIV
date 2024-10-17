export interface Repartidor{
    id:string,
    nombre:string | null,
    dni:string, 
    fecha_nacimiento:string ,
    numero_licencia:number, 
    apto_profesional:boolean, 
    pais_origen:string, 
    url_foto_pais:string|null
}