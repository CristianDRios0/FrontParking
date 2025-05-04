import { Cliente } from "./cliente.model";

export class Vehiculo {
    private placa: string;
    private id?: number;
    private clienteId?: number;

    constructor(placa: string, id?: number, clienteId?: number) {
        this.placa = placa;
        this.id = id;
        this.clienteId = clienteId;
    }

    getPlaca(): string {
        return this.placa;
    }

    getId(): number | undefined {
        return this.id;
    }

    getClienteId(): number | undefined {
        return this.clienteId;
    }

    setPlaca(placa: string): void {
        this.placa = placa;
    }

    setClienteId(clienteId: number): void {
        this.clienteId = clienteId;
    }
}