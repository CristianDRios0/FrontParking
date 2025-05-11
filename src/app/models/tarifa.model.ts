export class Tarifa {
    tipo: 'hora' | 'mensual';
    vehiculoTipo: 'automovil' | 'moto';
    monto: number;
    id?: number;
    fechaActualizacion?: Date;

    constructor(tipo: 'hora' | 'mensual', vehiculoTipo: 'automovil' | 'moto', monto: number, id?: number, fechaActualizacion?: Date) {
        this.tipo = tipo;
        this.vehiculoTipo = vehiculoTipo;
        this.monto = monto;
        this.id = id;
        this.fechaActualizacion = fechaActualizacion;
    }
}