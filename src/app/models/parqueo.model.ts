import { Celda } from "./celda.model";
import { Tarifa } from "./tarifa.model";
import { Vehiculo } from "./vehiculo.model";

export class Parqueo {
    private vehiculoId: Vehiculo;
    private celdaId: Celda;
    private tarifaId: Tarifa;
    private estado: 'activo' | 'finalizado' 
    private id?: number;
    private fechaEntrada?: Date;
    private fechaSalida?: Date;
    private totalPagado?: number;

    constructor(vehiculoId: Vehiculo, celdaId: Celda, tarifaId: Tarifa, estado: 'activo' | 'finalizado', id?: number, fechaEntrada?: Date, fechaSalida?: Date, totalPagado?: number) {
        this.vehiculoId = vehiculoId;
        this.celdaId = celdaId;
        this.tarifaId = tarifaId;
        this.estado = estado;
        this.id = id;
        this.fechaEntrada = fechaEntrada;
        this.fechaSalida = fechaSalida;
        this.totalPagado = totalPagado;
    }

    getVehiculoId(): Vehiculo {
        return this.vehiculoId;
    }

    getCeldaId(): Celda {
        return this.celdaId;
    }

    getTarifaId(): Tarifa {
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

    setVehiculoId(vehiculoId: Vehiculo): void {
        this.vehiculoId = vehiculoId;
    }

    setCeldaId(celdaId: Celda): void {
        this.celdaId = celdaId;
    }

    setTarifaId(tarifaId: Tarifa): void {
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