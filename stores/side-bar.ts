import { defineStore } from 'pinia';

export const useSideBarStore = defineStore('sideBar', {
  state: () => {
    return {
      isOpen: false
    };
  },
  actions: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    }
  }
});
