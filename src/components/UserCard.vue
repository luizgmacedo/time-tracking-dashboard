<script lang="ts">
import { useDashboardStore } from '@/stores/dashboard';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const store = useDashboardStore();

    const { selectedPeriod } = storeToRefs(store);
    const { setPeriod } = store;

    return {
      selectedPeriod,

      setPeriod,
    };
  },
};
</script>

<template>
  <div class="user-card">
    <div class="user">
      <div class="image">
        <img src="@/assets/images/image-jeremy.png" alt="User" class="photo" />
      </div>
      <div class="report">
        <p class="assignee">Report for</p>
        <p class="name">Jeremy Robson</p>
      </div>
    </div>
    <div class="schedule">
      <button
        class="periodical"
        :class="selectedPeriod === 'daily' ? 'active' : ''"
        @click="setPeriod('daily')"
      >
        Daily
      </button>
      <button
        class="periodical"
        :class="selectedPeriod === 'weekly' ? 'active' : ''"
        @click="setPeriod('weekly')"
      >
        Weekly
      </button>
      <button
        class="periodical"
        :class="selectedPeriod === 'monthly' ? 'active' : ''"
        @click="setPeriod('monthly')"
      >
        Monthly
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/global';

.user-card {
  background-color: $dark-blue;
  border-radius: 10px;

  .user {
    align-items: center;
    background-color: $blue;
    border-radius: 10px;
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 25px;

    @media screen and (min-width: 825px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .image {
      width: 65px;

      .photo {
        background-color: white;
        border-radius: 100%;
        flex-grow: 1;
        padding: 2px;
      }
    }

    .report {
      flex-grow: 4;
      .assignee {
        color: $pale-blue;
        font-size: 14px;
        font-weight: $text-light;
        margin: 0;
      }

      .name {
        color: white;
        font-size: 22px;
        font-weight: $text-light;

        @media screen and (min-width: 825px) {
          font-size: 28px;
          max-width: 50px;
        }
      }
    }
  }

  .schedule {
    display: flex;
    justify-content: space-between;
    padding: 25px;

    @media screen and (min-width: 825px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;
    }

    .periodical {
      background-color: transparent;
      border: 0;
      color: $desaturated-blue;
      cursor: pointer;
      font-weight: $text-regular;
      transition: all 0.2s ease-in-out;

      &.active,
      &:hover {
        color: white;
      }
    }
  }
}
</style>
