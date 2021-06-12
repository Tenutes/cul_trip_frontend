<script>
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
  computed: {},
  watch: {},
  mounted() {
  },
  updated() {
  },
  methods: {
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
    <dashboard-list-item title="Рекомендации" :slides="[1,2,3]" @click-title-more="clickMore"/>
    <dashboard-list-item title="Попробуйте новое" :slides="[1,2,3]" @click-title-more="clickMore"/>
    <dashboard-list-item title="Подборки" :slides="[1,2,3]" @click-title-more="clickMore"/>
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
