<script>
export default {
  name: 'IconBase',
  props: {
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    viewBox: {
      type: String,
      default: '0 0 20 20',
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
    iconStroke: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>

<template>
  <svg
    :height="height"
    :viewBox="viewBox"
    :width="width"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g :fill="iconColor" :stroke="iconStroke">
      <slot/>
    </g>
  </svg>
</template>
