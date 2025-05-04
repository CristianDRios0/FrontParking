export class Cliente {
    private nombre: string;
    private identificacion: number;
    private tipoPlan: 'mensual' | 'ocasional';
    private fechaInicio?: Date;
    private fechaFin?: Date;
    private id?: number;

    constructor(nombre: string, identificacion: number, tipoPlan: 'mensual' | 'ocasional', fechaInicio: Date, fechaFin: Date, id?: number) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.tipoPlan = tipoPlan;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.id = id
    }

    getNombre(): string {
        return this.nombre;
    }

    getIdentificacion(): number {
        return this.identificacion;
    }

    getTipoPlan(): 'mensual' | 'ocasional' {
        return this.tipoPlan;
    }

    getFechaInicio(): Date | undefined {
        return this.fechaInicio;
    }

    getFechaFin(): Date | undefined {
        return this.fechaFin;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setIdentificacion(identificacion: number): void {
        this.identificacion = identificacion;
    }

    setTipoPlan(tipoPlan: 'mensual' | 'ocasional'): void {
        this.tipoPlan = tipoPlan;
    }

    setFechaInicio(fechaInicio: Date): void {
        this.fechaInicio = fechaInicio;
    }

    setFechaFin(fechaFin: Date): void {
        this.fechaFin = fechaFin;
    }
}