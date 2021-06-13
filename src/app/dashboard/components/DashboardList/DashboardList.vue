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
  updated() {
  },
  methods: {
    ...mapActions('Dashboard', [
      'loadRecommendations',
      'loadNewEvents',
      'loadCompilations',
    ]),
    clickMore(data) {
      console.log(data);
    },
  },
};
</script>

<template>
  <div class="dashboard-list">
    <div class="dashboard-list__head">
      <dashboard-search/>
      <dashboard-list-menu/>
    </div>
    <dashboard-list-item title="Рекомендации" :slides="recommendations" @click-title-more="clickMore"/>
    <dashboard-list-item title="Попробуйте новое" :slides="newEvents" @click-title-more="clickMore"/>
    <dashboard-list-item title="Подборки" :slides="compilations" @click-title-more="clickMore"/>
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
