<template>
  <div id="app">
    <div class="row justify-content-center">
      <h1>Ejemplos de buscador RCEA</h1>
    </div>
    <div class="row">
      <div class="col-2" />
      <div class="col-4">
        <h5>Mostrando mensaje usando slot</h5>
        <buscador-rcea v-model="personaFisicaLeft">
          <template v-slot:message="slotProps">
            <span>NO SE ENCONTRÓ PERSONA CON RCEA</span>
            {{ slotProps.rcea }}
          </template>
        </buscador-rcea>
        <code>{{ personaFisicaLeft }}</code>
      </div>
      <div class="col-4">
        <h5>Mostrando mensaje sin usar slot</h5>
        <buscador-rcea v-model="personaFisicaRight" />
        <code>{{ personaFisicaRight }}</code>
      </div>
      <div class="col-2" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BuscadorRceaComponent from "../src/index";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

Vue.use(BuscadorRceaComponent, { host: "http://localhost:3000" });

const i18n = new VueI18n({
  locale: "en"
});

export default Vue.extend({
  i18n,
  data: function() {
    return {
      personaFisicaLeft: null,
      personaFisicaRight: null
    };
  }
});
</script>
