import { IDomicilio } from './domicilio.model';
import { IInstitucion } from './institucion.model';
export interface IPersonaFisica {
    cvu?: string;
    curp?: string;
    titulo?: string;
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    rfc?: string;
    genero?: string;
    correo?: string;
    login?: string;
    gradoAcademico?: string;
    nivelsni?: string;
    instituciones?: IInstitucion[];
    domicilios?: IDomicilio[];
    paisResidencia?: string;
    rcea?: string;
}
export declare class PersonaFisica implements IPersonaFisica {
    cvu?: string | undefined;
    curp?: string | undefined;
    titulo?: string | undefined;
    nombre?: string | undefined;
    apellidoPaterno?: string | undefined;
    apellidoMaterno?: string | undefined;
    rfc?: string | undefined;
    genero?: string | undefined;
    correo?: string | undefined;
    login?: string | undefined;
    gradoAcademico?: string | undefined;
    nivelsni?: string | undefined;
    instituciones?: IInstitucion[] | undefined;
    domicilios?: IDomicilio[] | undefined;
    paisResidencia?: string | undefined;
    rcea?: string | undefined;
    constructor(cvu?: string | undefined, curp?: string | undefined, titulo?: string | undefined, nombre?: string | undefined, apellidoPaterno?: string | undefined, apellidoMaterno?: string | undefined, rfc?: string | undefined, genero?: string | undefined, correo?: string | undefined, login?: string | undefined, gradoAcademico?: string | undefined, nivelsni?: string | undefined, instituciones?: IInstitucion[] | undefined, domicilios?: IDomicilio[] | undefined, paisResidencia?: string | undefined, rcea?: string | undefined);
}
