<script>
import YandexMap from 'src/classes/YandexMap';

export default {
  name: 'DashboardMap',
  components: {},
  props: {},
  data() {
    return {
      mapObject: null,
    };
  },
  mounted() {
    if (!this.mapObject) {
      this.mapObject = new YandexMap(this.$refs.map.id);
    }
  },
  beforeDestroy() {
    this.mapObject && this.mapObject.destroy();
  },
};
</script>

<template>
  <div class="dashboard-map">
    <div class="dashboard-map__container" id="map" ref="map"></div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-map {
  width: 100%;
  height: 100vh;

  &__container {
    width: 100%;
    height: 100%;
  }
}
</style>
