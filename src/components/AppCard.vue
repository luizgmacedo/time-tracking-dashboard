<script lang="ts">
import { useDashboardStore } from '@/stores/dashboard';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

export default {
  props: {
    activityType: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    currentTime: {
      type: Number,
      required: true,
    },
    previousTime: {
      type: Number,
      required: true,
    },
  },

  setup() {
    const store = useDashboardStore();
    const { selectedPeriod } = storeToRefs(store);

    const period = computed(() =>
      selectedPeriod.value === 'daily'
        ? 'Yesterday'
        : selectedPeriod.value === 'weekly'
        ? 'Last Week'
        : 'Last Month'
    );

    return {
      period,
    };
  },
};
</script>

<template>
  <div class="app-card" :class="activityType">
    <div class="item">
      <div class="activity-menu">
        <h3 class="activity">{{ title }}</h3>
        <span class="menu">
          <img src="@/assets/images/icon-ellipsis.svg" alt="Menu" />
        </span>
      </div>
      <div class="time-when">
        <h2 class="time">{{ currentTime }}hrs</h2>
        <p class="when">{{ period }} - {{ previousTime }}hrs</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/global';

.app-card {
  border-radius: 10px;
  padding-top: 35px;
  background-repeat: no-repeat;
  background-position: top -15px right 15px;

  &.work {
    background-color: $light-red-work;
    background-image: url('@/assets/images/icon-work.svg');
  }

  &.play {
    background-color: $soft-blue;
    background-image: url('@/assets/images/icon-play.svg');
  }

  &.study {
    background-color: $light-red-study;
    background-image: url('@/assets/images/icon-study.svg');
  }

  &.exercise {
    background-color: $lime-green;
    background-image: url('@/assets/images/icon-exercise.svg');
  }

  &.social {
    background-color: $violet;
    background-image: url('@/assets/images/icon-social.svg');
  }

  &.self-care {
    background-color: $soft-orange;
    background-image: url('@/assets/images/icon-self-care.svg');
  }

  .item {
    background-color: $dark-blue;
    border-radius: 10px;
    cursor: pointer;
    height: 100.6%;
    padding: 20px;
    transition: all 0.3s ease-in-out;

    @media screen and (min-width: 825px) {
      width: 200px;
    }

    &:hover {
      filter: brightness(1.5) contrast(0.94);
    }

    .activity-menu,
    .time-when {
      align-items: center;
      display: flex;
      justify-content: space-between;

      .activity {
        color: white;
        font-size: 18px;
        font-weight: $text-medium;

        @media screen and (min-width: 825px) {
          font-size: 16px;
        }
      }

      .menu {
        cursor: pointer;

        &:hover {
          filter: brightness(100);
        }
      }

      .time {
        color: white;
        font-weight: $text-light;
      }

      .when {
        color: $desaturated-blue;
      }
    }

    .time-when {
      @media screen and (min-width: 825px) {
        align-items: flex-start;
        flex-direction: column;
        margin-top: 10px;

        .time {
          font-size: 36px;
        }

        .when {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
