<script>
import DashboardMap from '../DashboardMap/DashboardMap';
import { mapActions, mapGetters } from 'vuex';
import DashboardListItem from './DashboardListItem';
import DashboardListMenu from './DashboardListMenu';
import DashboardSearch from './DashboardSearch';

export default {
  name: 'DashboardList',
  components: {
    DashboardMap,
    DashboardListItem,
    DashboardSearch,
    DashboardListMenu,
  },
  data() {
    return {
      yaMap: null,
      filterResults: [],
      filterLoads: false,
      pageView: 'list',
    };
  },
  computed: {
    ...mapGetters('Dashboard', [
      'recommendations',
      'newEvents',
      'compilations',
    ]),
    mapData() {
      return this.filterLoads ? this.filterResults : this.recommendations;
    },
  },
  created() {
    this.loadRecommendations();
    this.loadNewEvents();
    this.loadCompilations();
  },
  methods: {
    ...mapActions('Dashboard', [
      'loadRecommendations',
      'loadNewEvents',
      'loadCompilations',
    ]),
    handleFilterLoad(data) {
      this.filterResults = data;
      this.filterLoads = true;
    },
    returnToMain() {
      this.filterResults = [];
      this.filterLoads = false;
    },
  },
};
</script>

<template>
  <div class="dashboard-list">
    <div class="dashboard-list__head">
      <dashboard-search @filter-loads="handleFilterLoad"/>
      <dashboard-list-menu v-model="pageView"/>
    </div>
    <template v-if="pageView === 'map'">
      <dashboard-map :events="mapData"/>
    </template>
    <template v-else>
      <template v-if="!filterLoads">
        <dashboard-list-item title="Рекомендации" :events="recommendations"/>
        <dashboard-list-item title="Попробуйте новое" :events="newEvents"/>
        <dashboard-list-item title="Подборки" :events="compilations"/>
      </template>
      <template v-else>
        <div class="dashboard-list__back">
          <el-button type="info" @click="returnToMain">Вернуться</el-button>
        </div>
        <dashboard-list-item :swiper="false" title="Результаты поиска" :events="filterResults"/>
      </template>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-list {
  width: 100%;

  &__head {
    padding-top: 20px;
    margin-bottom: 40px;
  }

  &__back {
    margin-bottom: 20px;
    padding: 0 20px;

    .el-button {
      width: 100%;
    }
  }
}
</style>
