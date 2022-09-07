import { defineStore } from 'pinia';
import data from '@/assets/data/data.json';

export const useDashboardStore = defineStore('dashboard', {
  state: () => {
    return {
      selectedPeriod: 'daily',
      activities: [] as Activity[],
    };
  },

  actions: {
    setPeriod(period: string) {
      this.selectedPeriod = period;
    },
    getActivities() {
      this.activities = data;
    },
  },

  getters: {
    activitiesByTimeframe: (state) =>
      state.activities.map((activity) => [
        {
          title: activity.title,
          //@ts-ignore
          timeframes: activity.timeframes[state.selectedPeriod], // Type problem
        },
      ]),
  },
});

interface Activity {
  title: string;
  timeframes: {
    daily: Time;
    weekly: Time;
    monthly: Time;
  };
}

interface Time {
  current: number;
  previous: number;
}
