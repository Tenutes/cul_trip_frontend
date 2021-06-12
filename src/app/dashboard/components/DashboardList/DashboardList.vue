<script>
import YandexMap from '../../../../classes/YandexMap';
import DashboardListItem from './DashboardListItem';

export default {
  name: 'DashboardList',
  components: { DashboardListItem },
  props: {},
  data() {
    return {
      yaMap: null,
    };
  },
  computed: {},
  watch: {},
  mounted() {
    if (!this.yaMap) {
      this.yaMap = new YandexMap(this.$refs.map.id);
    }
  },
  updated() {
  },
  methods: {},
};
</script>

<template>
  <div class="dashboard-list">
    <dashboard-list-item/>
    <dashboard-list-item/>
    <dashboard-list-item/>
    <div class="map" ref="map" id="map"></div>
  </div>
</template>

<style lang="scss" scoped>
#map {
  width: 200px;
  height: 200px;
}
</style>
