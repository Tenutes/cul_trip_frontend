<script>
import { getCroppedText, getEventDate, getSrc } from '@/utils/event';
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import IconArrow from '../../../common/svg/IconArrow';
import IconBase from '../../../common/svg/IconBase';

export default {
  name: 'DashboardListItem',
  components: {
    IconArrow,
    IconBase,
    Swiper,
    SwiperSlide,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    events: {
      type: Array,
      required: true,
    },
    swiper: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      options: {
        autoUpdate: true,
        eventsPerView: 'auto',
        spaceBetween: 16,
      },
    };
  },
  methods: {
    getSrc(src) {
      return getSrc(src);
    },
    getDate(event) {
      return getEventDate(event);
    },
    getCroppedText(text) {
      return getCroppedText(text);
    },
  },
};
</script>

<template>
  <div class="dashboard-list-item">
    <div class="dashboard-list-item__title">
      <h2>{{ title }}</h2>
      <icon-base
        v-if="false"
        class="dashboard-list-item__title-link"
        width="16"
        height="8"
        view-box="0 0 16 8"
      >
        <icon-arrow/>
      </icon-base>
    </div>
    <div
      v-if="swiper"
      class="dashboard-list-item__swiper"
    >
      <swiper
        :options="options"
        class="dashboard-list-item__swiper-container"
      >
        <swiper-slide
          v-for="(event, index) in events"
          :key="index"
          class="dashboard-list-item__slide"
        >
          <router-link
            class="dashboard-list-item__slide-link"
            tag="a"
            :to=" {name: 'event', params: { id: event.id } }"
          />
          <div class="dashboard-list-item__slide-image">
            <img :src="getSrc(event.image.src)" :alt="event.title">
            <div
              class="dashboard-list-item__slide-tags"
              v-if="event.tags && event.tags.length"
            >
              <p
                v-for="(tag, index) in event.tags"
                :key="index"
                :class="`tag--${tag}`"
                class="tag"
              >
                {{ tag }}
              </p>
            </div>
          </div>
          <div class="dashboard-list-item__slide-info">
            <p class="dashboard-list-item__slide-title">{{ event.title }}</p>
            <p class="dashboard-list-item__slide-description" v-html="getCroppedText(event.text)">
            </p>
            <div class="dashboard-list-item__slide-action">
              <p>{{ getDate(event) }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div
      v-else
      class="dashboard-list-item__list"
    >
      <div
        v-for="event in events"
        class="dashboard-list-item__list-item"
      >
        <router-link class="dashboard-list-item__slide-link" tag="a" :to="{name: 'event', params: { id: event.id }}"/>
        <div class="dashboard-list-item__slide-image">
          <img :src="getSrc(event.image.src)" :alt="event.title">
          <div class="dashboard-list-item__slide-tags" v-if="event.tags && event.tags.length">
            <p
              v-for="(tag, index) in event.tags"
              :key="index"
              :class="`tag--${tag}`"
              class="tag tag--shadowed"
            >
              {{ tag }}
            </p>
          </div>
        </div>
        <div class="dashboard-list-item__slide-info">
          <p class="dashboard-list-item__slide-title">{{ event.title }}</p>
          <p class="dashboard-list-item__slide-description" v-html="getCroppedText(event.text)">
          </p>
          <div class="dashboard-list-item__slide-action">
            <p>{{ getDate(event) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-list-item {
  padding: 0 20px;
  margin-bottom: 40px;
  $root: &;

  &:last-child {
    margin-bottom: 0;
  }

  &--event {
    .dashboard-list-item {
      &__slide {
        width: calc(100% - 26px);
        margin-right: 16px;
      }
    }
  }

  &__title {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    appearance: none;
    padding: 0;
    border: 0;
    background: transparent;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }

    h2 {
      margin: 0 10px 0 0;
      font-size: 20px;
      line-height: 26px;
      font-weight: 500;
      color: var(--col-dark);
    }

    &:hover,
    &:active {
      #{$root} {
        &__title-link {
          transform: translateX(5px);
        }
      }
    }
  }

  &__title-link {
    line-height: 30px;
    transition: .25s;
    color: var(--col-blue);
  }

  &__swiper {
    margin: 0 -20px;
    width: calc(100% + 40px);
    padding: 0 20px;
  }

  &__swiper-container {
    width: 100%;
    overflow: visible;
  }

  &__slide {
    width: calc(100% - 26px);
    position: relative;

    &:last-child {
      margin-right: 0;
    }
  }

  &__slide-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  &__slide-image {
    position: relative;
    height: 0;
    overflow: hidden;
    padding-top: 51.28%;
    width: 100%;
    margin-bottom: 16px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }

  &__slide-tags {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
  }

  &__slide-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: var(--col-dark);
    margin-bottom: 8px;
  }

  &__slide-description {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__slide-action {
    display: flex;

    p {
      margin-right: 20px;
      font-size: 14px;
      line-height: 18px;

      &:last-child {
        margin-right: 0;
      }
    }

    a {
      color: var(--col-blue);
      text-decoration: none;
    }
  }

  &__list {
  }

  &__list-item {
    width: 100%;
    margin-bottom: 40px;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
