<script>
export default {
  name: 'DashboardUser',
  computed: {
    timeLabel() {
      const date = new Date();
      const time = date.getHours();
      if (time < 5) {
        return 'Доброй ночи';
      } else if (time < 12) {
        return 'Доброе утро';
      } else if (time < 17) {
        return 'Добрый день';
      } else if (time < 24) {
        return 'Добрый вечер';
      } else {
        return 'Доброй ночи';
      }
    },
  },
};
</script>

<template>
  <div class="dashboard-user">
    <h1 class="dashboard-user__welcome">{{ timeLabel }},</h1>
    <h2 class="dashboard-user__name">Noname Nonamov Nonamovich</h2>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-user {
  padding: 0 20px;
  margin-bottom: 15px;

  h1, h2 {
    margin: 0;
  }

  h1 {
    margin-bottom: 3px;
  }

  h2 {
    font-size: 18px;
  }
}
</style>
