export class Pago {
    monto: number;
    parqueoId?: number;
    clienteId?: number;
    id?: number;

    constructor(monto: number, parqueoId?: number, clienteId?: number, id?: number,) {
        this.monto = monto;
        this.parqueoId = parqueoId;
        this.clienteId = clienteId;
        this.id = id;
    }
}