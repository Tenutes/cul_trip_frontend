<script>
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'DashboardListItem',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    slides: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      options: {
        autoUpdate: true,
        slidesPerView: 'auto',
      },
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
  <div class="dashboard-list-item">
    <button class="dashboard-list-item__title">
      <span>{{ title }}</span>
      <i class="el-icon-right dashboard-list-item__title-link"></i>
    </button>
    <div class="dashboard-list-item__swiper">
      <swiper
        :options="options"
        class="dashboard-list-item__swiper-container"
      >
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          class="dashboard-list-item__swiper-slide"
        >
          {{ slide }}
        </swiper-slide>
      </swiper>
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

  &__title {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    appearance: none;
    padding: 0;
    border: 0;
    background: transparent;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      margin: 0 15px 0 0;
      line-height: 30px;
      font-size: 25px;
      font-weight: bold;
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
  }

  &__swiper {
    margin: 0 -20px;
    width: 100%;
    padding: 0 20px;
    overflow: hidden;
  }

  &__swiper-container {
    width: calc(100% + 20px);
    overflow: visible;
  }

  &__swiper-slide {
    width: 40%;
    margin-right: 25px;
    background: #C29494;
    border-radius: 5px;
    padding: 20px;
    color: white;
    height: 100px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
