export class Vehiculo {
    placa: string;
    id?: number;
    clienteId?: number;

    constructor(placa: string, id?: number, clienteId?: number) {
        this.placa = placa;
        this.id = id;
        this.clienteId = clienteId;
    }
}