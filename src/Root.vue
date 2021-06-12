<script>
import Dashboard from './app/dashboard/main';
import { createScript } from './utils/element';

export default {
  components: { Dashboard },
  created() {
    createScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', { id: 'yamap' });
  },
};
</script>
<template>
  <div id="app">
    <dashboard/>
  </div>
</template>

<style>
:root {
  font-family: 'TT Firs Neue', sans-serif;
  --col-primary: #C29494;
}

::before,
::after {
  /*font-family: 'TT Firs Neue', sans-serif;*/
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
