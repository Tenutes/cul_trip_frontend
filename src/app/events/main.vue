<script>
import { mapGetters } from 'vuex';
import EventsItem from './components/EventsItem';
import EventsList from './components/EventsList';

export default {
  components: { EventsItem, EventsList },
  name: 'Dashboard',
  data() {
    return {
      page: '',
    };
  },
  created() {
    if (this.$route.params.id) {
      this.page = 'event';
    }
  },
  computed: {
    ...mapGetters('Events', [
      'fetching',
    ]),
  },
};
</script>

<template>
  <div class="events" v-loading="fetching.event">
    <events-item v-if="page === 'event'"/>
  </div>
</template>

<style lang="scss">
.events {
  width: 100%;
  height: var(--vh, 100vh);
}
</style>
