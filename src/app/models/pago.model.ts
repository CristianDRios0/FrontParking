import { Cliente } from "./cliente.model";
import { Parqueo } from "./parqueo.model";

export class Pago {
    private monto: number;
    private id?: number;
    private parqueoId?: Parqueo;
    private clienteId?: Cliente;

    constructor(monto: number, id?: number, parqueoId?: Parqueo, clienteId?: Cliente) {
        this.monto = monto;
        this.id = id;
        this.parqueoId = parqueoId;
        this.clienteId = clienteId;
    }

    getMonto(): number {
        return this.monto;
    }

    getId(): number | undefined {
        return this.id;
    }

    getParqueoId(): Parqueo | undefined {
        return this.parqueoId;
    }

    getClienteId(): Cliente | undefined {
        return this.clienteId;
    }

    setMonto(monto: number): void {
        this.monto = monto;
    }

    setParqueoId(parqueoId: Parqueo): void {
        this.parqueoId = parqueoId;
    }

    setClienteId(clienteId: Cliente): void {
        this.clienteId = clienteId;
    }
}