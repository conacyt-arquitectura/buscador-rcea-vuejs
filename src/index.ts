import { defaultConfig } from "./buscador-rcea.component";
import BuscadorRceaComponent from "./buscador-rcea.vue";
import { Domicilio, EntidadFederativa, IDomicilio, IEntidadFederativa, IInstitucion, Institucion, IPersonaFisica, PersonaFisica } from "./model";

export default {
  install(Vue: any, globalOptions: any) {
    const options = { ...defaultConfig, ...globalOptions };
    Vue.prototype.$RCEA_SEARCHER_DEFAULT_OPTIONS = options;
    Vue.component('buscador-rcea', BuscadorRceaComponent);
  }
}

export { BuscadorRceaComponent, IDomicilio, IEntidadFederativa, IInstitucion, IPersonaFisica, Domicilio, EntidadFederativa, Institucion, PersonaFisica };
