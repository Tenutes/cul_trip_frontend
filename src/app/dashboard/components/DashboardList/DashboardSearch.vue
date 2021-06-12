<script>
export default {
  name: 'DashboardSearch',
  components: {},
  props: {},
  data() {
    return {
      search: null,
    };
  },
  watch: {
    search(n) {
      console.log(n);
      this.$emit('search', n);
    },
  },
};
</script>

<template>
  <div class="dashboard-search">
    <el-input type="search" v-model="search" placeholder="Поиск..."/>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-search {
  padding: 0 20px;
  margin-bottom: 20px;
}
</style>
