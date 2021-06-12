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
      background-color: var(--col-dark-hover);
      border-color: var(--col-dark-hover);
    }

    &:active {
      color: white;
      background-color: var(--col-dark-hover);
      border-color: var(--col-dark-hover);
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
</style>
