<script>
export default {
  name: 'InputChoose',
  components: {},
  props: {
    value: {},
    items: {
      type: Array,
      required: true,
    },
    breakable: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentValue: this.multiple ? [] : null,
    };
  },
  watch: {
    value(newValue) {
      if (newValue !== this.currentValue) {
        this.currentValue = newValue;
      }
    },
  },
  methods: {
    choose(item) {
      if (this.multiple) {
        const index = this.currentValue.findIndex(value => value === item);
        if (index > -1) {
          this.currentValue.splice(index, 1);
        } else {
          this.currentValue.push(item);
        }
      } else {
        if (this.currentValue === item) {
          this.currentValue = {};
        } else {
          this.currentValue = item;
        }
      }
      this.$emit('input', this.currentValue);
    },
  },
};
</script>

<template>
  <div class="input-choose">
    <div class="input-choose__wrapper" :class="{ breakable }">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="input-choose__item"
        :class="{
          active: item === currentValue || (Array.isArray(currentValue) && currentValue.includes(item)),
        }"
        @click="choose(item)"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-choose {
  width: calc(100% + 10px);
  margin: -5px;

  &__wrapper {
    display: flex;
    justify-content: center;
    overflow: auto;
    padding-bottom: 10px;

    &.breakable {
      width: 100%;
      flex-wrap: wrap;
      padding-bottom: 0;
    }
  }

  &__item {
    margin: 5px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--col-dark);
    min-height: 30px;
    max-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--col-grey-light);
    border-radius: 10px;
    min-width: 70px;
    flex-shrink: 0;
    padding: 0 10px;
    border: 0;
    transition: .25s;
    max-width: 240px;
    user-select: none;

    &.active {
      background: var(--col-orange);
      color: white;
    }
  }

  &.gapped {
    margin-left: -20px;
    margin-right: -20px;
    width: calc(100% + 40px);
  }

  &.in-tabs {
    .input-choose {
      &__wrapper {
        padding-left: 15px;
        padding-right: 15px;
      }
    }
  }

  &.full-items {
    .input-choose {
      &__item {
        flex-grow: 1;
      }
    }
  }
}
</style>
