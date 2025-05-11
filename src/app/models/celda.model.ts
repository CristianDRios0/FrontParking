export class Celda {
    id?: number;
    codigo: string;
    tipo: '' | 'Automovil' | 'Moto';
    estado: '' | 'Libre' | 'Ocupado' | 'Reservado';

    constructor (codigo: string, tipo: '' | 'Automovil' | 'Moto', estado: '' | 'Libre' | 'Ocupado' | 'Reservado', id?: number,) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.estado = estado;
        if (id !== undefined){
            this.id = id;
        }
    }
}
