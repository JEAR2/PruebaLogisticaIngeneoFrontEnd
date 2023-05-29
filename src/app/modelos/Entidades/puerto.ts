export class Puerto {
    id:number=0;
    nombre:string="";
    telefono:string="";
    ubicacion:string="";
    constructor(nombre: string, telefono: string, ubicacion: string) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.ubicacion = ubicacion;
    }
}