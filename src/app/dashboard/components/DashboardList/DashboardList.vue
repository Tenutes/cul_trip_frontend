<script>
import { mapActions, mapGetters } from 'vuex';
import DashboardListItem from './DashboardListItem';
import DashboardListMenu from './DashboardListMenu';
import DashboardSearch from './DashboardSearch';

export default {
  name: 'DashboardList',
  components: {
    DashboardListItem,
    DashboardSearch,
    DashboardListMenu,
  },
  props: {},
  data() {
    return {
      yaMap: null,
      filterResults: [],
      filterLoads: false,
    };
  },
  computed: {
    ...mapGetters('Dashboard', [
      'recommendations',
      'newEvents',
      'compilations',
    ]),
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
  },
};
</script>

<template>
  <div class="dashboard-list">
    <div class="dashboard-list__head">
      <dashboard-search @filter-loads="handleFilterLoad"/>
      <dashboard-list-menu/>
    </div>
    <template v-if="!filterLoads">
      <dashboard-list-item title="Рекомендации" :events="recommendations"/>
      <dashboard-list-item title="Попробуйте новое" :events="newEvents"/>
      <dashboard-list-item title="Подборки" :events="compilations"/>
    </template>
    <template v-else>
      <dashboard-list-item :swiper="false" title="Результаты поиска" :events="filterResults"/>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-list {
  width: 100%;
  height: 100%;
  padding: 20px 0;

  &__head {
    margin-bottom: 40px;
  }
}
</style>
