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
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  updated() {
  },
  methods: {},
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
