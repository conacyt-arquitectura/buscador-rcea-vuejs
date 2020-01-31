# Buscador de Personas Físicas por RCEA
El componente de VueJS buscador de Personas Físicas por RCEA

## Getting started
Incluye en tu proyecto un archivo `.npmrc` con el siguiente contenido para descargar esta biblioteca:

```properties
registry=https://artifacts.ccd.conacyt.mx/content/groups/npm/
```

O revisa este [link](https://conacyt-arquitectura.github.io/npm/configuracion-cliente-npm) para configurar tu cliente npm con el repostiorio privado.

Para instalar con npm usa `npm i @conacyt/buscador-rcea`  
Para instalar con yarn usa `yarn add @conacyt/buscador-rcea`

## Uso
```
<div id="app">
    <buscador-rcea v-model="personaFisica"></buscador-rcea>
</div>
```

## Desarrollo
Para desarrollo con Hot Replace Module usa `npm run serve` para servir la carpeta `example`.

### Building
Usa `npm run build` para generar los archivos de distribución en la carpeta `dist`.