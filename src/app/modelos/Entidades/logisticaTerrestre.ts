import { Cliente } from "./Cliente";
import { Bodega } from "./bodega";
import { TipoProducto } from "./tipoProducto";

export class LogisticaTerrestre{

    id:number=0;
    placaVehiculo:string="";
    numeroGuia:string="";
    cantidadProducto:number=0;
    fechaRegistro:Date;
    fechaEntrega:Date;
    precioEnvio:number;
    descuento:number=0;
    cliente:Cliente;
    bodega:Bodega;
    tipoProducto:TipoProducto;
    constructor(placaVehiculo: string, numeroGuia: string,cantidadProducto:number,
        fechaRegistro:Date,fechaEntrega:Date,precioEnvio:number,cliente:Cliente,
        bodega:Bodega,tipoProducto:TipoProducto) {
        this.placaVehiculo = placaVehiculo;
        this.numeroGuia = numeroGuia;
        this.cantidadProducto =cantidadProducto;
        this.fechaRegistro = fechaRegistro;
        this.fechaEntrega = fechaEntrega;
        this.precioEnvio = precioEnvio;
        this.bodega=bodega;
        this.cliente=cliente;
        this.tipoProducto=tipoProducto;
    }
}