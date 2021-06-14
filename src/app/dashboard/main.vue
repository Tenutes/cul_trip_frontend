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
  width: 100%;
  overflow: hidden;
  min-height: var(--vh, 100vh);
}
</style>
