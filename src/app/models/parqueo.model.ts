export class Parqueo {
    private vehiculoId: number;
    private celdaId: number;
    private tarifaId: number;
    private estado: 'activo' | 'finalizado' 
    private id?: number;
    private fechaEntrada?: Date;
    private fechaSalida?: Date;
    private totalPagado?: number;

    constructor(vehiculoId: number, celdaId: number, tarifaId: number, estado: 'activo' | 'finalizado', id?: number, fechaEntrada?: Date, fechaSalida?: Date, totalPagado?: number) {
        this.vehiculoId = vehiculoId;
        this.celdaId = celdaId;
        this.tarifaId = tarifaId;
        this.estado = estado;
        this.id = id;
        this.fechaEntrada = fechaEntrada;
        this.fechaSalida = fechaSalida;
        this.totalPagado = totalPagado;
    }

    getVehiculoId(): number {
        return this.vehiculoId;
    }

    getCeldaId(): number {
        return this.celdaId;
    }

    getTarifaId(): number {
        return this.tarifaId;
    }

    getEstado(): 'activo' | 'finalizado' {
        return this.estado;
    }

    getId(): number | undefined {
        return this.id;
    }

    getFechaEntrada(): Date | undefined {
        return this.fechaEntrada;
    }

    getFechaSalida(): Date | undefined {
        return this.fechaSalida
    }

    getTotalPagado(): number | undefined {
        return this.totalPagado;
    }

    setVehiculoId(vehiculoId: number): void {
        this.vehiculoId = vehiculoId;
    }

    setCeldaId(celdaId: number): void {
        this.celdaId = celdaId;
    }

    setTarifaId(tarifaId: number): void {
        this.tarifaId = tarifaId;
    }

    setEstado(estado: 'activo' | 'finalizado'): void {
        this.estado = estado;
    }

    setFechaEntrada(fechaEntrada: Date): void {
        this.fechaEntrada = fechaEntrada;
    }

    setFechaSalida(fechaSalida: Date): void {
        this.fechaSalida = fechaSalida;
    }

    setTotalPagado(totalPagado: number): void {
        this.totalPagado = totalPagado;
    }
}