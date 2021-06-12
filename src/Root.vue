<script>
import { createScript } from './utils/element';

export default {
  created() {
    createScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', { id: 'yamap' });
  },
};
</script>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
:root {
  --col-primary: #C29494;
  --col-grey: #DDD;
  --col-grey-light: #F6F5F8;
  --col-grey-dark: #ADADAD;
  --col-dark: #282A31;
  --col-dark-hover: #2D2E38;
  --col-blue: #2771FF;
  --col-purple: #6167FF;
  --col-orange: #FF5959;
  --col-green: #38AF00;
  --col-blue-light: #4BB4FF;
}

html, body {
  font-family: "TT Firs Neue", sans-serif;
  color: var(--col-dark);
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}

* {
  color: inherit;
  box-sizing: inherit;
}

::before,
::after {
  box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  margin: 0;
}

.el-input {
  &__inner {
    border-radius: 10px;
    border-color: var(--col-grey);
    font-size: 14px;
    font-weight: 500;

    &[type=search] {
      appearance: none;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--col-grey);
    }
  }

  &__prefix {
    left: 13px;
    color: var(--col-grey);
  }

  &--prefix {
    .el-input {
      &__inner {
        padding-left: 39px;
      }
    }
  }
}

.el-button {
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;

  &--primary {
    background-color: var(--col-dark);
    border-color: var(--col-dark);

    &:hover,
    &:focus {
      color: white;
      background-color: var(--col-dark);
      border-color: var(--col-dark);
    }

    &:active {
      color: white;
      background-color: var(--col-dark);
      border-color: var(--col-dark);
    }
  }

  &--default {
    color: var(--col-dark);
    background-color: transparent;
    border-color: var(--col-grey);

    &:hover,
    &:focus {
      color: var(--col-dark);
      background-color: transparent;
      border-color: var(--col-grey);
    }

    &:active {
      color: var(--col-dark);
      background-color: transparent;
      border-color: var(--col-grey);
    }
  }

  &--secondary {
    color: white;
    background-color: var(--col-blue);
    border-color: var(--col-blue);

    &:hover,
    &:focus {
      color: white;
      background-color: var(--col-blue);
      border-color: var(--col-blue);
    }

    &:active {
      color: white;
      background-color: var(--col-blue);
      border-color: var(--col-blue);
    }
  }

  &--danger {
    color: var(--col-orange);
    background-color: transparent;
    border-color: transparent;

    &:hover,
    &:focus {
      color: var(--col-orange);
      background-color: transparent;
      border-color: transparent;
    }

    &:active {
      color: var(--col-orange);
      background-color: transparent;
      border-color: transparent;
    }
  }
}

.el-radio-button {
  flex-grow: 1;

  &__inner {
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 0;
    background: var(--col-grey-light);
    color: var(--col-dark);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: inline-block;
      margin-right: 10px;
    }

    &:hover,
    &:focus,
    &:active {
      background: var(--col-grey-light);
      color: var(--col-dark);
    }
  }

  &.is-active {
    .el-button {
      &__inner {
        color: white;
        background: var(--col-dark);

        &:hover,
        &:focus,
        &:active {
          color: white;
          background: var(--col-dark);
        }
      }
    }
  }

  &__orig-radio {
    &:checked {
      + .el-radio-button {
        &__inner {
          color: white;
          background: var(--col-dark);

          &:hover,
          &:focus,
          &:active {
            color: white;
            background: var(--col-dark);
          }
        }
      }
    }
  }

  &:first-child,
  &:last-child {
    .el-radio-button {
      &__inner {
        border-radius: 10px;
      }
    }
  }
}

.el-tabs {
  margin: 0 -20px;

  &__active-bar,
  &__nav-prev,
  &__nav-next {
    display: none;
  }

  &__header {
    margin: 0 0 30px;
  }

  &__nav {
    padding: 0;
  }

  &__nav-scroll {
    overflow: visible;
  }

  &__nav-wrap {
    &.is-scrollable {
      padding: 0;
    }

    &::after {
      height: 1px;
      background-color: var(--col-grey-light);
    }
  }

  &__item {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: var(--col-grey-dark);
    padding: 0 20px 0 0;

    &.is-active {
      color: var(--col-dark);
    }
  }

  &--top {
    .el-tabs {
      &__item.is-top {
        &:nth-child(2) {
          padding-left: 20px;
        }

        &:last-child {
          padding-right: 20px;
        }
      }
    }
  }
}


.el-date-editor {
  padding-top: 0;
  padding-bottom: 0;

  &:first-child {
    .el-input {
      &__inner {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }

  &:last-child {
    margin-left: -1px;

    .el-input {
      &__inner {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }


  .el-input {
    &__inner {
      text-align: center;
      padding: 0 15px
    }
  }

  .el-icon-date {
    visibility: hidden;
  }

  .el-range {
    &__icon,
    &__close-icon {
      visibility: hidden;
    }
  }

  .el-range-separator {
    background-color: var(--col-grey);
    width: 1px;
    height: 100%;
    padding: 0;
  }

  .el-range-input {
    flex-grow: 1;
    width: auto;
  }

  &--daterange {
    &.el-input {
      &__inner {
        width: 100%;
      }
    }
  }
}
</style>
