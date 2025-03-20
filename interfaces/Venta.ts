import type { Producto } from "./Producto"

type EstadoCompra ="Pendiente"|"Enviado"|"Cancelado"|"Completado"
export interface Venta{
    id:number,
    usuarioId:number,
    dni:string,
    fecha:string,
    productos:{producto:Producto,cantidad:number}[];
    total:number,
    estado:EstadoCompra
}