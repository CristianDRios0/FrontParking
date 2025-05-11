export class Pago {
    monto: number;
    id?: number;
    parqueoId?: number;
    clienteId?: number;

    constructor(monto: number, id?: number, parqueoId?: number, clienteId?: number) {
        this.monto = monto;
        this.id = id;
        this.parqueoId = parqueoId;
        this.clienteId = clienteId;
    }
}