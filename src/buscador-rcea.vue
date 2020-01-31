<template>
  <div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="alertType"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="dismissCountDown = $event"
    >
      <slot name="message" v-bind:rcea="searchedKey">{{ alertMessage }}</slot>
    </b-alert>
    <form v-on:submit.prevent="search()" role="search">
      <div class="form-group"></div>
      <input
        type="search"
        id="rcea-search"
        name="rcea-search"
        v-model.trim="searchKey"
      />
      <span>&nbsp;</span>
      <button
        type="submit"
        id="rcea-search-button"
        class="btn btn-primary"
        :disabled="searchButtonDisabled()"
      >
        <font-awesome-icon
          icon="search"
          v-if="!isSearching"
        ></font-awesome-icon>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
          v-else
        ></span>
        <span v-if="!isSearching">
          &nbsp;
          {{ $t("buscadorRcea.search") }}
        </span>
        <span v-else>
          &nbsp;
          {{ $t("buscadorRcea.searching") }}
        </span>
      </button>
    </form>
  </div>
</template>

<script lang="ts" src="./buscador-rcea.component.ts"></script>
