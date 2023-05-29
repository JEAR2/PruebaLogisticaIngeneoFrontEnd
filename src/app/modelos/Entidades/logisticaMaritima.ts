import { Cliente } from "./Cliente";
import { Puerto } from "./puerto";
import { TipoProducto } from "./tipoProducto";

export class LogisticaMaritima{

    id:number=0;
    numeroFlota:string="";
    numeroGuia:string="";
    cantidadProducto:number=0;
    fechaRegistro:Date;
    fechaEntrega:Date;
    precioEnvio:number;
    descuento:number=0;
    cliente:Cliente;
    puerto:Puerto;
    tipoProducto:TipoProducto;
    constructor(placaVehiculo: string, numeroGuia: string,cantidadProducto:number,
        fechaRegistro:Date,fechaEntrega:Date,precioEnvio:number,cliente:Cliente,
        puerto:Puerto,tipoProducto:TipoProducto) {
        this.numeroFlota = placaVehiculo;
        this.numeroGuia = numeroGuia;
        this.cantidadProducto =cantidadProducto;
        this.fechaRegistro = fechaRegistro;
        this.fechaEntrega = fechaEntrega;
        this.precioEnvio = precioEnvio;
        this.puerto=puerto;
        this.cliente=cliente;
        this.tipoProducto=tipoProducto;
    }
}