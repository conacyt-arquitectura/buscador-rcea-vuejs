export interface IEntidadFederativa {
    id?: number;
    nombre?: string;
}
export declare class EntidadFederativa implements IEntidadFederativa {
    id?: number | undefined;
    nombre?: string | undefined;
    constructor(id?: number | undefined, nombre?: string | undefined);
}
