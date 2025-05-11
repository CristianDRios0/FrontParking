export class Parqueo {
    vehiculoId: number;
    celdaId: number;
    tarifaId: number;
    estado: 'activo' | 'finalizado' 
    fechaEntrada?: Date;
    fechaSalida?: Date;
    totalPagado?: number;
    id?: number;

    constructor(vehiculoId: number, celdaId: number, tarifaId: number, estado: 'activo' | 'finalizado', fechaEntrada?: Date, fechaSalida?: Date, totalPagado?: number, id?: number) {
        this.vehiculoId = vehiculoId;
        this.celdaId = celdaId;
        this.tarifaId = tarifaId;
        this.estado = estado;
        this.fechaEntrada = fechaEntrada;
        this.fechaSalida = fechaSalida;
        this.totalPagado = totalPagado;
        this.id = id;
    }
}