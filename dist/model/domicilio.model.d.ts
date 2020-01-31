export interface IDomicilio {
    direccion?: string;
    tipo?: string;
}
export declare class Domicilio implements IDomicilio {
    direccion?: string | undefined;
    tipo?: string | undefined;
    constructor(direccion?: string | undefined, tipo?: string | undefined);
}
