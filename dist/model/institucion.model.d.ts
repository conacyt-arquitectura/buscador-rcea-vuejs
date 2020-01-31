import { IEntidadFederativa } from './entidad-federativa.model';
export interface IInstitucion {
    nombre?: string;
    localidad?: string;
    municipio?: string;
    clave?: string;
    entidadFederativa?: IEntidadFederativa;
}
export declare class Institucion implements IInstitucion {
    nombre?: string | undefined;
    localidad?: string | undefined;
    municipio?: string | undefined;
    clave?: string | undefined;
    entidadFederativa?: IEntidadFederativa | undefined;
    constructor(nombre?: string | undefined, localidad?: string | undefined, municipio?: string | undefined, clave?: string | undefined, entidadFederativa?: IEntidadFederativa | undefined);
}
