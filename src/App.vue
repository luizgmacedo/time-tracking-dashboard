<script lang="ts">
import UserCard from '@/components/UserCard.vue';
import AppCard from '@/components/AppCard.vue';
import { useDashboardStore } from '@/stores/dashboard';
import { storeToRefs } from 'pinia';

export default {
  components: { UserCard, AppCard },

  setup() {
    const store = useDashboardStore();

    store.getActivities();

    const { activities, activitiesByTimeframe } = storeToRefs(store);

    const activityClass = (title: string) =>
      title.toLowerCase().replace(' ', '-');

    return {
      activities,
      activitiesByTimeframe,

      activityClass,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="dashboard">
      <UserCard />
      <div class="cards">
        <AppCard
          :activity-type="activityClass(item[0].title)"
          :title="item[0].title"
          :current-time="item[0].timeframes.current"
          :previous-time="item[0].timeframes.previous"
          v-for="item in activitiesByTimeframe"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/global';

.container {
  background-color: $very-dark-blue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 825px) {
    height: 100vh;
  }

  .dashboard {
    width: 100%;
    padding: 20px;
    background-color: $very-dark-blue;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 825px) {
      display: grid;
      grid-template-columns: 0.8fr 2fr;
      padding: 0;
      width: fit-content;
    }

    .cards {
      display: grid;
      gap: 1.3rem;

      @media screen and (min-width: 825px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
}
</style>
