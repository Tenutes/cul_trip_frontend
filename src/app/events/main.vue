<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {},
  name: 'Dashboard',
  created() {
    const { id } = this.$route.params;

    if (id) {
      this.loadEvent(id)
    } else {
      this.loadEvents();
    }
  },
  computed: {
    ...mapGetters('Events', [
      'fetching',
      'events',
      'event',
    ]),
  },
  methods: {
    ...mapActions('Events', [
      'loadEvents',
      'loadEvent',
    ]),
  },
};
</script>

<template>
  <div class="events">
  </div>
</template>

<style lang="scss">
.events {
}
</style>
