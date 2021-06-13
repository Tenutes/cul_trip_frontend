<script>
import InputChoose from '../../../common/InputChoose';
import IconBase from '../../../common/svg/IconBase';
import IconSearch from '../../../common/svg/IconSearch';
import { AGES, DAY_TYPES } from '../../constants';

const dateTabFilterData = () => ({
  day_time: null,
  line_type: null,
  address: null,
  period_start: null,
  period_end: null,
});

const eventTabFilterData = () => ({
  sphere: null,
  placements: null,
  payment: null,
});

const routeTabFilterData = () => ({});

const emptyFilterData = () => ({
  restriction_age: null,
  ...dateTabFilterData(),
  ...eventTabFilterData(),
  ...routeTabFilterData(),
});

export default {
  name: 'DashboardFilter',
  components: { InputChoose, IconBase, IconSearch },
  props: {},
  data() {
    return {
      formData: {
        ...emptyFilterData(),
      },
      activeTab: 'date',
    };
  },
  computed: {
    ages() {
      return AGES;
    },
    dayTypes() {
      return DAY_TYPES;
    },
  },
  watch: {
    // activeTab(n) {
    //   switch (n) {
    //     case 'date':
    //       this.formData = { ...this.formData, ...eventTabFilterData(),... };
    //       break;
    //     case 'event':
    //       this.formData = { ...this.formData, ...emptyFilterData() };
    //       break;
    //     case 'route':
    //       this.formData = { ...this.formData, ...emptyFilterData() };
    //       break;
    //     default:
    //       this.formData = { ...emptyFilterData() };
    //   }
    // },
  },
  methods: {
    reset() {
      this.formData = { ...emptyFilterData() };
    },
    submit() {
      console.log(this.formData);
    },
    isDisabledEnd(date) {
      return this.formData.period_start && date < this.formData.period_start;
    },
    isDisabledStart(date) {
      return this.formData.period_end && date > this.formData.period_end;
    },
  },
};
</script>

<template>
  <div class="dashboard-filter">
    <div class="dashboard-filter__category">
      <input-choose
        class="gapped in-tabs"
        :multiple="true"
        :items="ages"
        v-model="formData.restriction_age"
      />
    </div>
    <div class="dashboard-filter__tabs">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="Дата и место" name="date">
          <div class="dashboard-filter__block">
            <h2 class="dashboard-filter__block-title">Когда?</h2>
            <div class="dashboard-filter__block-item">
              <el-date-picker
                type="date"
                v-model="formData.period_start"
                placeholder="От"
                value-format="timestamp"
                :picker-options="{
                  disabledDate: isDisabledStart,
                }"
                firstDayOfWeek="1"
              >
              </el-date-picker>
              <el-date-picker
                type="date"
                v-model="formData.period_end"
                placeholder="До"
                value-format="timestamp"
                :picker-options="{
                  disabledDate: isDisabledEnd,
                }"
                firstDayOfWeek="1"
              >
              </el-date-picker>
            </div>
            <input-choose
              :items="dayTypes"
              v-model="formData.day_time"
              :multiple="true"
              class="in-tabs"
            />
          </div>
          <div class="dashboard-filter__block dashboard-filter__block--padded">
            <h2 class="dashboard-filter__block-title">Где?</h2>
            <el-input
              class="dashboard-filter__search"
              type="search"
              v-model="formData.address"
              placeholder="Адрес"
            >
              <icon-base
                slot="prefix"
                class="dashboard-filter__search-icon"
                view-box="0 0 14 14"
                width="14"
                height="14"
              >
                <icon-search/>
              </icon-base>
            </el-input>
            <input-choose
              :items="['онлайн', 'оффлайн']"
              v-model="formData.line_type"
              class="full-items"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="Мероприятие" name="event">
          <div class="dashboard-filter__block">
            <h2 class="dashboard-filter__block-title">Сфера</h2>
            <input-choose
              :items="['образование', 'мой район', 'московское долголетие']"
              v-model="formData.sphere"
              class="in-tabs"
            />
          </div>
          <div class="dashboard-filter__block">
            <h2 class="dashboard-filter__block-title">Участие</h2>
            <input-choose
              :items="['дети', 'для лиц с ограниченными возможностями', 'открытый воздух', 'зритель', 'участие в процессе']"
              v-model="formData.placements"
              :multiple="true"
              :breakable="true"
              class="in-tabs dashboard-filter__block-element"
            />
            <input-choose
              :items="['бесплатно', 'платно']"
              v-model="formData.payment"
              class="in-tabs full-items"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="Маршрут" name="route"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="dashboard-filter__action">
      <el-button @click="submit" class="dashboard-filter__action-btn" type="secondary">Поиск</el-button>
      <el-button @click="reset" class="dashboard-filter__action-btn" type="danger">Сбросить все фильтры</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-filter {
  padding: 20px 20px 65px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: calc(var(--vh, 100vh) - 60px);
  background-color: #FFF;
  z-index: 100;
  max-height: calc(100vh - 60px);
  overflow-y: auto;

  &__category {
    margin-bottom: 50px;
  }

  &__block {
    margin-bottom: 40px;

    &--padded {
      padding: 0 20px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__search {
    margin-bottom: 20px;
  }

  &__search-icon {
    height: 100%;
    text-align: center;
    transition: all .3s;
    line-height: 40px;
  }

  &__block-title {
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 20px;
  }

  &__block-element {
    margin-bottom: 20px;
  }

  &__action {
    padding: 0 20px;
  }

  &__action-btn {
    width: 100%;
    margin: 0 0 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__block-item {
    padding: 0 20px;
    margin-bottom: 20px;
    display: flex;
  }

  &__tabs {
    margin-bottom: 40px;
  }
}
</style>
