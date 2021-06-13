<script>
import DashboardListItem from '@/app/dashboard/components/DashboardList/DashboardListItem';
import YandexMap from '@/classes/YandexMap';
import { getCroppedText, getEventDate, getSrc } from '@/utils/event';
import { format, parseISO } from 'date-fns';
import { mapActions, mapGetters } from 'vuex';
import IconArrow from '../../common/svg/IconArrow';
import IconBase from '../../common/svg/IconBase';
import IconGoogleCalendar from '../../common/svg/IconGoogleCalendar';
import IconLike from '../../common/svg/IconLike';
import IconShare from '../../common/svg/IconShare';

export default {
  name: 'EventsItem',
  components: { IconGoogleCalendar, IconShare, IconBase, IconArrow, IconLike, DashboardListItem },
  props: {},
  data() {
    return {
      id: null,
      isLiked: false,
      mapObject: null,
      mapInitializing: false,
      showMore: false,
      expanded: false,
    };
  },
  computed: {
    ...mapGetters('Events', [
      'fetching',
      'event',
    ]),
  },
  watch: {
    $route: {
      deep: true,
      async handler(n) {
        const { id } = n.params;

        if (id !== this.id) {
          await this.onIdUpdate(id);
        }
      },
    },
  },
  async mounted() {
    const { id } = this.$route.params;
    await this.onIdUpdate(id);
  },
  methods: {
    ...mapActions('Events', [
      'loadEvent',
    ]),
    async onIdUpdate(id) {
      if (this.$refs.content) {
        this.$refs.content.scrollTop = 0;
      }

      this.id = id;
      await this.loadEvent(id);
      if (!this.event) {
        return this.$router.push({ name: 'dashboard' });
      }

      if (!this.mapObject) {
        this.mapInitializing = true;
        this.mapObject = new YandexMap(this.$refs.map.id);
        this.mapObject.setMapIcon(this.$refs.balloon.src);
        await this.mapObject.init();
        this.mapObject.drawPoint(this.event);
        this.mapInitializing = false;
      } else {
        this.mapObject.drawPoint(this.event);
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
      this.expanded = true;
    },
    handleSwipeBottom() {
      this.expanded = false;
      this.showMore = false;
      this.$refs.content.scrollTop = 0;
    },
    format(...args) {
      return format(...args);
    },
    parseISO(date) {
      return parseISO(date);
    },
  },
};
</script>

<template>
  <div class="event">
    <img style="display: none" src="~@/assets/img/balloon.png" ref="balloon">
    <div class="event__map" ref="map" id="map" v-loading="fetching.event || mapInitializing"></div>
    <div class="event__header">
      <button class="event__header-back" @click="$router.go(-1)">
        <icon-base
          class="event__header-back-icon"
          width="20"
          height="10"
          view-box="0 0 16 8"
        >
          <icon-arrow/>
        </icon-base>
      </button>
      <div class="event__header-tags">
        <div class="tag tag--прогулки tag--shadowed mb-0 mr-0">прогулки</div>
      </div>
      <div class="event__header-action">
        <button
          class="event__header-action-item"
          @click="isLiked = !isLiked"
        >
          <icon-base
            class="event__header-action-icon event__header-action-icon--like"
            :class="{isLiked}"
            width="20"
            height="20"
            view-box="0 0 20 20"
            :stroke-color="isLiked ? '#FF5959' : '#282A31'"
          >
            <icon-like/>
          </icon-base>
        </button>
      </div>
    </div>
    <div
      class="event__body"
    >
      <div
        class="event__body-inner"
        v-loading="fetching.event"
        :class="{ loading: fetching.event, expanded }"
      >
        <div
          class="event__body-swiper"
          v-touch:swipe.top="handleSwipeTop"
          v-touch:swipe.bottom="handleSwipeBottom"
        ></div>
        <div
          v-if="event"
          class="event__body-inner-content"
          ref="content"
        >
          <transition name="show">
            <div class="event__image" v-if="expanded">
              <img :src="getSrc(event.image.src)" :alt="event.title">
            </div>
          </transition>
          <div class="event__body-block">
            <h2 class="event__title">{{ event.title }}</h2>
            <p class="event__description" v-html="getCroppedText(event.text)"></p>
            <el-button
              type="text"
              v-if="getCroppedText(event.text).length < event.text.length && !showMore && expanded"
              class="event__button-more"
              @click="showMore = true"
            >
              <span>Больше...</span>
              <i class="el-icon-arrow-down"></i>
            </el-button>
            <div class="event__info" v-if="!expanded">
              <p>{{ event.address }}</p>
              <p>{{ getDate(event) }}</p>
            </div>
          </div>
          <transition-group name="show">
            <template v-if="expanded">
              <div class="event__body-block" key="info">
                <div class="event__info">
                  <p><b>{{ getDate(event) }}</b></p>
                </div>
              </div>
              <div class="event__social" key="social">
                <el-button
                  type="info"
                >
                  <icon-base
                    width="20"
                    height="20"
                    view-box="0 0 20 20"
                  >
                    <icon-share/>
                  </icon-base>
                </el-button>
                <el-button
                  type="info"
                  title="Добавить в календарь"
                  class="addeventatc event__add-to-calendar"
                >
                  <icon-base
                    width="20"
                    height="20"
                    view-box="0 0 20 20"
                  >
                    <icon-google-calendar/>
                  </icon-base>
                  <span class="start">{{ format(parseISO(event.date_from), 'yyyy-MM-dd HH:mm') }}</span>
                  <span class="end">{{ format(parseISO(event.date_to), 'yyyy-MM-dd HH:mm') }}</span>
                  <span class="timezone">Europe/Moscow</span>
                  <span class="title">{{ event.title }}</span>
                  <span class="location">{{ event.address }}</span>
                </el-button>
              </div>
              <div
                class="event__body-block event__body-block--no-gutters"
                v-if="event.recommendations.length"
                key="recommendations"
              >
                <dashboard-list-item title="Похожие мероприятия" :events="event.recommendations"/>
              </div>
              <div class="event__body-block" key="timeline">
                <div class="event__timeline">
                  <div class="event__timeline-block">
                    <div class="event__timeline-item event__timeline-item--stop">
                      <p>Прогулка по Большой Дмитровке в Музей Москвы</p>
                      <p class="date">16:00 - 18:00</p>
                    </div>
                    <div class="event__timeline-item">
                      <p>15 минут на автобусе</p>
                    </div>
                  </div>
                  <div class="event__timeline-block">
                    <div class="event__timeline-item event__timeline-item--stop">
                      <p>«Сказки в стиле великих художников» в Воронцовском парке</p>
                      <p class="date">18:30 - 20:30</p>
                    </div>
                    <div class="event__timeline-item">
                      <p>5 минут пешком</p>
                    </div>
                  </div>
                  <div class="event__timeline-block">
                    <div class="event__timeline-item event__timeline-item--stop">
                      <p>Прогулка по Арбату</p>
                      <p class="date">20:10 - 21:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="event__footer" key="footer">
                <el-button
                  class="event__footer-more"
                  type="info"
                >
                  Подробнее
                </el-button>
                <el-button
                  class="event__footer-action"
                  @click="isLiked = !isLiked"
                >
                  <icon-base
                    class="event__header-action-icon event__header-action-icon--like"
                    :class="{isLiked}"
                    width="20"
                    height="20"
                    view-box="0 0 20 20"
                    :stroke-color="isLiked ? '#FF5959' : '#282A31'"
                  >
                    <icon-like/>
                  </icon-base>
                </el-button>
              </div>
            </template>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.event {
  height: var(--vh, 100vh);
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .dashboard-list-item {
    padding-left: 16px;
    padding-right: 16px;
  }

  &__header,
  &__body {
    position: relative;
    z-index: 2;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 16px 0;
    margin-bottom: 20px;

    button {
      border: 0;
      background: transparent;

      &:hover,
      &:focus,
      &:active {
        outline: none;
      }
    }
  }

  &__header-action-icon {
    color: transparent;
  }

  &__header-back {
    margin-right: 15px;
    padding: 0;
    margin-left: -10px;
    width: 40px;
    height: 40px;
  }

  &__header-back-icon {
    transform: rotate(180deg);
  }

  &__header-action {
    margin-left: 15px;
    margin-right: -10px;
  }

  &__header-action-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
  }

  &__header-action-icon {
    &--like {
      &.isLiked {
        color: var(--col-orange);
      }
    }
  }

  &__map {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    transform: translateY(calc(var(--vh, 100vh) - 245px));
    transition: .25s;
    padding-top: 20px;
    width: 100%;
    margin-top: auto;
    height: 100%;

    &.loading {
      min-height: 190px;
    }

    &.expanded {
      transform: none;
      padding-top: 0;

      .event {
        &__body-inner-content {
          padding-top: 0;
          pointer-events: all;
        }

        &__body-swiper {
          height: 100px;
        }
      }
    }
  }

  &__body-inner-content {
    position: relative;
    transition: .25s;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px 0 50px;
    background: white;
    border-radius: 15px 15px 0 0;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.05);
    max-height: 100%;
    pointer-events: none;
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

  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    margin: 0 0 8px;
  }

  &__description {
    margin-bottom: 8px;
  }

  &__body-block {
    margin-bottom: 20px;
    padding-left: 16px;
    padding-right: 16px;

    &--no-gutters {
      padding-left: 0;
      padding-right: 0;
    }
  }

  &__image {
    width: 100%;
    height: 0;
    padding-top: 44.4444%;
    position: relative;
    margin-bottom: 20px;

    img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 14px;
    line-height: 18px;

    p {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }

    b {
      color: black;
      font-weight: 500;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    padding: 0 16px;
  }

  &__footer-more {
    flex-grow: 1;
  }

  &__footer-action {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 40px;
    height: 40px;
    margin-left: 16px;
    flex-shrink: 0;
    margin-right: -10px;
    padding: 0;
  }

  &__social {
    margin-bottom: 40px;
    padding: 0 16px;

    button {
      width: 40px;
      height: 40px;
      padding: 10px;
    }
  }

  &__timeline {
    width: 280px;
  }

  &__timeline-block {
    position: relative;
    margin-bottom: 26px;

    &:last-child {
      margin-bottom: 0;
    }

    .event {
      &__timeline-item {
        &::before,
        &::after {
          color: var(--col-green);
        }
      }
    }

    &:nth-child(even) {
      .event {
        &__timeline-item {
          &::before,
          &::after {
            color: var(--col-blue-light);
          }
        }
      }
    }

    &:last-child {
      .event {
        &__timeline-item {
          &:last-child {
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }

  &__timeline-item {
    position: relative;
    margin-bottom: 26px;
    padding-left: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      position: absolute;
      content: "";
      left: 2px;
      top: calc(.5em - 2px);
      width: 5px;
      height: 5px;
      background-color: currentColor;
      border-radius: 50%;
      z-index: 5;
    }

    &::after {
      position: absolute;
      content: "";
      left: 4px;
      top: .5em;
      height: calc(100% + 25px);
      width: 1px;
      background: currentColor;
      color: var(--col-green);
    }

    &--stop {
      &::before {
        left: 0;
        width: 9px;
        height: 9px;
        background-color: white;
        border: 2px solid currentColor;
      }
    }

    p {
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }

      &.date {
        color: var(--col-grey-dark);
      }
    }
  }

  &__add-to-calendar {
    background-image: none;
    background-color: var(--col-grey-light);
    box-shadow: none !important;
    text-shadow: none;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
  }
}

.show-enter-active, .show-leave-active {
  transition: opacity .25s;
}

.show-enter, .show-leave-to {
  opacity: 0;
}
</style>
<style lang="scss">
.event {
  .el-loading-mask {
    border-radius: 15px 15px 0 0;
  }

  .addeventatc_icon {
    display: none;
  }

  .copyx {
    display: none !important;
  }
}
</style>
