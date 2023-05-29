export class Cliente {
    id:number=0;
    identificacion:number=0;
    nombre:string="";
    telefono:string="";
    sexo:string="";
    correo:string="";
    constructor(identificacion:number,nombre: string, telefono: string, sexo: string,correo:string) {
        this.identificacion=identificacion
        this.nombre = nombre;
        this.telefono = telefono;
        this.sexo = sexo;
        this.correo=correo; 
    }
}