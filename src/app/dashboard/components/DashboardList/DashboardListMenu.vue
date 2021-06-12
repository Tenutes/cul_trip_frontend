<script>
import IconBase from '../../../common/svg/IconBase';
import IconList from '../../../common/svg/IconList';
import IconMap from '../../../common/svg/IconMap';

export default {
  name: 'DashboardListMenu',
  components: { IconMap, IconList, IconBase },
  data() {
    return {
      selectedType: 'list',
    };
  },
};
</script>

<template>
  <div class="dashboard-list-menu">
    <el-radio-group class="dashboard-list-menu__group" v-model="selectedType">
      <el-radio-button label="list">
        <icon-base
          view-box="0 0 14 14"
          width="14"
          height="14"
        >
          <icon-list/>
        </icon-base>
        <span>Список</span>
      </el-radio-button>
      <el-radio-button label="map">
        <icon-base
          view-box="0 0 14 14"
          width="14"
          height="14"
        >
          <icon-map/>
        </icon-base>
        <span>Карта</span>
      </el-radio-button>
    </el-radio-group>
  </div>
</template>
<style lang="scss" scoped>
.dashboard-list-menu {
  padding: 0 20px;

  &__group {
    width: 100%;
    background: var(--col-grey-light);
    border-radius: 10px;
    display: flex;
  }
}
</style>
