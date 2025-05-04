import { Cliente } from "./cliente.model";

export class Vehiculo {
    private placa: string;
    private id?: number;
    private clienteId?: Cliente;

    constructor(placa: string, id?: number, clienteId?: Cliente) {
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

    getClienteId(): Cliente | undefined {
        return this.clienteId;
    }

    setPlaca(placa: string): void {
        this.placa = placa;
    }

    setClienteId(clienteId: Cliente): void {
        this.clienteId = clienteId;
    }
}