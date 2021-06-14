<script>
import YandexMap from '@/classes/YandexMap';
import { getCroppedText, getEventDate, getSrc } from '@/utils/event';
import { format, parseISO } from 'date-fns';
import { isEqual } from 'lodash';

export default {
  name: 'DashboardMap',
  components: {},
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      mapObject: null,
      mapLoading: false,
      expanded: false,
    };
  },
  watch: {
    events(n, o) {
      if (!isEqual(n, o)) {
        this.initMap();
      }
    },
  },
  /**
   * Если не проинициализирована карта - инициализируем
   * Рисуем точки на ней
   * @returns {Promise<Route>}
   */
  mounted() {
    this.initMap();
  },
  methods: {
    /**
     * Если не проинициализирована карта - инициализируем
     * Рисуем точки на ней
     * @returns {Promise<Route>}
     */
    async initMap() {
      if (!this.mapObject) {
        this.mapInitializing = true;
        this.mapObject = new YandexMap(this.$refs.map.id);
        this.mapObject.setMapIcon(this.$refs.balloon.src);
        await this.mapObject.init();
        this.mapObject.drawPoints(this.events);
        this.mapInitializing = false;
      } else {
        this.mapObject.drawPoints(this.events);
      }
    },
    getSrc(src) {
      return getSrc(src);
    },
    getCroppedText(text) {
      if (this.showMore) {
        return text;
      }
      return getCroppedText(text, 75);
    },
    getDate(event) {
      return getEventDate(event);
    },
    handleSwipeTop() {
      this.expanded = this.events.length !== 0;
    },
    handleSwipeBottom() {
      this.expanded = false;
      this.$refs.content.scrollTop = 0;
    },
    format(...args) {
      return format(...args);
    },
    parseISO(date) {
      return parseISO(date);
    },
  },
  beforeDestroy() {
    this.mapObject && this.mapObject.destroy();
  },
};
</script>

<template>
  <div class="dashboard-map">
    <img style="display: none" src="~@/assets/img/balloon-red.png" ref="balloon">
    <div class="dashboard-map__container" id="map" ref="map"></div>
    <div
      class="dashboard-map__body"
    >
      <div
        class="dashboard-map__body-inner"
        :class="{ expanded }"
      >
        <div
          class="dashboard-map__body-swiper"
          v-touch:swipe.top="handleSwipeTop"
          v-touch:swipe.bottom="handleSwipeBottom"
        ></div>
        <div
          class="dashboard-map__body-inner-content"
          ref="content"
        >
          <template v-if="events.length === 0">
            <h2 class="dashboard-map__title">К сожалению, событий не найдено</h2>
          </template>
          <template v-else>
            <div
              v-for="event in events"
              :key="event.id"
              class="dashboard-map__body-item"
            >
              <div class="dashboard-map__body-item-head">
                <div class="dashboard-map__body-item-head-tags" v-if="event.tags && event.tags.length">
                  <p
                    v-for="(tag, index) in event.tags"
                    :key="index"
                    :class="`tag--${tag}`"
                    class="tag"
                  >
                    {{ tag }}
                  </p>
                </div>
                <div class="dashboard-map__body-item-head-actions"></div>
              </div>
              <h2 class="dashboard-map__body-item-title">{{ event.title }}</h2>
              <p class="dashboard-map__body-item-description" v-html="getCroppedText(event.text)"></p>
              <div class="dashboard-map__body-item-info">
                <p></p>
                <p>{{ getDate(event) }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-map {
  width: 100%;
  height: calc(var(--vh, 100vh) - 160px);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &__title {
    margin: 0;
    padding: 0 16px;
    font-size: 22px;
  }

  &__container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &__body {
    position: relative;
    z-index: 2;
    pointer-events: none;
    display: flex;
    align-items: flex-start;
    max-height: calc(var(--vh, 100vh) - 75px);
    height: 100%;
  }

  &__body-inner {
    position: relative;
    pointer-events: all;
    transform: translateY(calc(var(--vh, 100vh) - 350px));
    transition: .25s;
    padding-top: 20px;
    width: 100%;
    margin-top: auto;
    height: 100%;

    &.expanded {
      transform: none;
      padding-top: 0;

      .dashboard-map {
        &__body-inner-content {
          padding-top: 30px;
          pointer-events: all;
        }

        &__body-swiper {
          height: 50px;
        }
      }
    }
  }

  &__body-inner-content {
    position: relative;
    transition: .25s;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px 0 25px;
    background: white;
    border-radius: 15px 15px 0 0;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.05);
    max-height: 100%;
    pointer-events: none;
    min-height: 200px;
  }

  &__body-swiper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 175px;
    z-index: 10;

    &::before {
      position: absolute;
      content: "";
      width: 30px;
      height: 4px;
      left: 50%;
      top: 10px;
      transform: translateX(-50%);
      background: rgba(40, 42, 49, 0.4);
      border-radius: 10px;
      z-index: 2;
      box-shadow: 0 1px 3px rgba(white, .3);
      pointer-events: none;
    }
  }

  &__body-item {
    margin-bottom: 20px;
    padding-bottom: 20px;
    padding-left: 16px;
    padding-right: 16px;
    border-bottom: 1px solid var(--col-grey);

    &:last-child {
      margin-bottom: 0;
      border-bottom: 0;
    }
  }

  &__body-item-head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  &__body-item-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 8px;
  }

  &__body-item-description {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 8px;
  }

  &__body-item-info {
    font-size: 14px;
    line-height: 18px;
  }
}
</style>
