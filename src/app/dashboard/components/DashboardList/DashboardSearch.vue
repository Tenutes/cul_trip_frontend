<script>
import IconBase from '../../../common/svg/IconBase';
import IconClose from '../../../common/svg/IconClose';
import IconSearch from '../../../common/svg/IconSearch';
import IconSettings from '../../../common/svg/IconSettings';
import DashboardFilter from '../DashboardFilter/DashboardFilter';

export default {
  name: 'DashboardSearch',
  components: {
    DashboardFilter,
    IconClose,
    IconSettings,
    IconSearch,
    IconBase,
  },
  props: {},
  data() {
    return {
      search: null,
      filterExtended: false,
    };
  },
  watch: {
    search(n) {
      this.$emit('search', n);
    },
    filterExtended(n) {
      if (n) {
        document.documentElement.style.overflow = n ? 'hidden' : '';
      }
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
        :disabled="filterExtended"
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
        :type="filterExtended ? 'default' : 'primary'"
        class="dashboard-search__settings"
        @click="filterExtended =! filterExtended"
      >
        <icon-base
          :view-box="filterExtended ? '0 0 14 14' : '0 0 20 20'"
          :width="filterExtended ? 14 : 20"
          :height="filterExtended ? 14 : 20"
        >
          <icon-close v-if="filterExtended"/>
          <icon-settings v-else/>
        </icon-base>
      </el-button>
    </div>
    <div
      class="dashboard-search__body"
      :class="{ extended: filterExtended }"
    >
      <transition name="fade">
        <template v-if="filterExtended">
          <dashboard-filter/>
        </template>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-search {
  padding: 0 20px;
  margin-bottom: 20px;
  position: relative;

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
    flex-shrink: 0;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__body {
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
