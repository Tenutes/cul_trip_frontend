<script>
import DashboardList from './components/DashboardList/DashboardList';
export default {
  components: { DashboardList },
  name: 'Dashboard',
};
</script>

<template>
  <div class="dashboard">
    <dashboard-list/>
  </div>
</template>

<style lang="scss">
.dashboard {
  padding: 0 20px;
}
</style>
