export class Tarifa {
    private tipo: 'hora' | 'mensual';
    private vehiculoTipo: 'automovil' | 'moto';
    private monto: number;
    private id?: number;
    private fechaActualizacion?: Date;

    constructor(tipo: 'hora' | 'mensual', vehiculoTipo: 'automovil' | 'moto', monto: number, id?: number, fechaActualizacion?: Date) {
        this.tipo = tipo;
        this.vehiculoTipo = vehiculoTipo;
        this.monto = monto;
        this.id = id;
        this.fechaActualizacion = fechaActualizacion;
    }

    getTipo(): 'hora' | 'mensual' {
        return this.tipo;
    }

    getVehiculoTipo(): 'automovil' | 'moto' {
        return this.vehiculoTipo;
    }

    getMonto(): number {
        return this.monto;
    }

    getId(): number | undefined {
        return this.id;
    }

    getFechaActualizacion(): Date | undefined {
        return this.fechaActualizacion;
    }

    setTipo(tipo: 'hora' | 'mensual'): void {
        this.tipo = tipo;
    }

    setVehiculoTipo(vehiculoTipo: 'automovil' | 'moto'): void {
        this.vehiculoTipo = vehiculoTipo;
    }

    setMonto(monto: number): void {
        this.monto = monto;
    }

    setFechaActualizacion(fechaActualizacion: Date): void {
        this.fechaActualizacion = fechaActualizacion;
    }
}