<script>
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
    <div class="dashboard-list-item__title">
      <h2>{{ title }}</h2>
      <icon-base
        class="dashboard-list-item__title-link"
        width="16"
        height="8"
        view-box="0 0 16 8"
      >
        <icon-arrow/>
      </icon-base>
    </div>
    <div class="dashboard-list-item__swiper">
      <swiper
        :options="options"
        class="dashboard-list-item__swiper-container"
      >
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          class="dashboard-list-item__slide"
        >
          <div class="dashboard-list-item__slide-image">
            <!--           <img :src="slide.image" :alt="slide.title">-->
            <img src="~@/assets/img/godblessus.png" :alt="slide.title">
            <div class="dashboard-list-item__slide-tags">
              <p class="dashboard-list-item__slide-tag dashboard-list-item__slide-tag--спорт">спорт</p>
              <p class="dashboard-list-item__slide-tag dashboard-list-item__slide-tag--дети">дети</p>
              <p class="dashboard-list-item__slide-tag dashboard-list-item__slide-tag--прогулки">прогулки</p>
              <p class="dashboard-list-item__slide-tag dashboard-list-item__slide-tag--музей">музей</p>
            </div>
          </div>
          <div class="dashboard-list-item__slide-info">
            <p class="dashboard-list-item__slide-title">«ЗОЖик» в библиотеке № 194</p>
            <p class="dashboard-list-item__slide-description">Интенсивы по физкультуре в рамках пятой ежегодной
              программы городского досуга «Культлето»</p>
            <div class="dashboard-list-item__slide-action">
              <p><a href="#" class="dashboard-list-item__slide-link">Библиотека № 194</a></p>
              <p>22 июня — 24 июня</p>
            </div>
          </div>
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
    width: calc(100% - 16px);
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
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

  &__slide-tag {
    margin-right: 8px;
    margin-bottom: 8px;
    min-width: 70px;
    font-size: 14px;
    line-height: 20px;
    color: white;
    font-weight: 500;
    text-align: center;
    border-radius: 20px;
    padding: 0 5px;

    &--спорт {
      background: var(--col-orange);
    }

    &--дети {
      background: var(--col-purple);
    }

    &--музей {
      background: var(--col-blue-light);
    }

    &--прогулки {
      background: var(--col-green);
    }
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
}
</style>
