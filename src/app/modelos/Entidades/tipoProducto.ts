export class TipoProducto {
    id:number=0;
    nombre:string="";
    descripcion:string="";
    constructor(nombre: string, descripcion: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}