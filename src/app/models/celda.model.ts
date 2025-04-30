export class Celda {
    id: number;
    codigo: string;
    tipo: 'automovil' | 'moto';
    estado: 'libre' | 'ocupado' | 'reservado';

    constructor (id: number, codigo: string, tipo: 'automovil' | 'moto', estado: 'libre' | 'ocupado' | 'libre') {
        this.id = id;
        this.codigo = codigo;
        this. tipo = tipo;
        this.estado = estado;
    }
}
