<script>
import DashboardListItem from './DashboardListItem';
import DashboardUser from './DashboardUser';

export default {
  name: 'DashboardList',
  components: {
    DashboardListItem,
    DashboardUser,
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
    <dashboard-user/>
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
}

#map {
  width: 100%;
  height: 100%;
}
</style>
