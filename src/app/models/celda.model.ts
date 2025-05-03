export class Celda {
    id?: number;
    codigo: string;
    tipo: '' | 'automovil' | 'moto';
    estado: '' | 'libre' | 'ocupado' | 'reservado';

    constructor (codigo: string, tipo: '' | 'automovil' | 'moto', estado: '' | 'libre' | 'ocupado' | 'reservado', id?: number,) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.estado = estado;
        if (id !== undefined){
            this.id = id;
        }
    }
}
