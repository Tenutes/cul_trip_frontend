<script>
export default {
  name: 'DashboardMenu',
  components: {},
  props: {},
  data() {
    return {
      activeName: 'Список'
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
  <div class="dashboard-menu">
    <el-tabs v-model="activeName">
      <el-tab-pane label="Список" name="Список"></el-tab-pane>
      <el-tab-pane label="Карта" name="карта"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-menu {
  padding: 0 20px;
  margin-bottom: 20px;
}
</style>
