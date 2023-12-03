// dataService.js
import Vue from 'vue';

export const dataService = new Vue({
  data() {
    return {
      sharedData: ''
    };
  },
  methods: {
    updateData(newData) {
      this.sharedData = newData;
      this.$emit('data-updated', newData);
    }
  }
});