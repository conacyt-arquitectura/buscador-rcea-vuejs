import { IPersonaFisica } from './model/persona-fisica.model';
export default class RceaService {
    private baseApiUrl;
    constructor(baseApiUrl?: string);
    retrieveByCvu(cvu: string): Promise<IPersonaFisica>;
    retrieveByRcea(rcea: string): Promise<IPersonaFisica>;
    retrieveByReniecyt(numeroReniecyt: string): Promise<IPersonaFisica>;
    retrieveByLogin(correoUsuario: string): Promise<IPersonaFisica>;
}
