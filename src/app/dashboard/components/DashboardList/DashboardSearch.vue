<script>
import IconSettings from '../../../common/svg/IconSettings';
import IconBase from '../../../common/svg/IconBase';
import IconSearch from '../../../common/svg/IconSearch';

export default {
  name: 'DashboardSearch',
  components: { IconSettings, IconSearch, IconBase },
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
    <div class="dashboard-search__head">
      <el-input
        class="dashboard-search__head-input"
        type="search"
        v-model="search"
        placeholder="Поиск мероприятий"
      >
        <icon-base
          slot="prefix"
          class="dashboard-search__icon"
          view-box="0 0 14 14"
          width="14"
          height="14"
        >
          <icon-search/>
        </icon-base>
      </el-input>
      <el-button
        type="primary"
        class="dashboard-search__settings"
      >
        <icon-base
          view-box="0 0 20 20"
          width="20"
          height="20"
        >
          <icon-settings/>
        </icon-base>
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-search {
  padding: 0 20px;
  margin-bottom: 20px;

  &__icon {
    height: 100%;
    text-align: center;
    transition: all .3s;
    line-height: 40px;
  }

  &__head {
    display: flex;
  }

  &__head-input {
    flex-grow: 1;
    margin-right: 16px;
  }

  &__settings {
    padding-top: 7px;
    padding-bottom: 7px;
    width: 40px;
    height: 40px;
  }
}
</style>
