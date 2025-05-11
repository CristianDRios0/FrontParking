export class Cliente {
    nombre: string;
    identificacion: number;
    tipoPlan: 'mensual' | 'ocasional';
    fechaInicio?: Date;
    fechaFin?: Date;
    id?: number;

    constructor(nombre: string, identificacion: number, tipoPlan: 'mensual' | 'ocasional', fechaInicio: Date, fechaFin: Date, id?: number) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.tipoPlan = tipoPlan;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.id = id
    }
}