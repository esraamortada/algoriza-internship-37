<template>
  <div class="w-[295px] h-[170px]">
    <div class="rounded-tl-md rounded-tr-md border border-gray-300 bg-gray-200 p-[18px]">
      <p class="text-gray-800 font-sans text-base font-medium">Rating</p>
    </div>
    <div class="pl-[18px] mt-[20px] mb-[24px]">
      <p class="text-gray-700 font-sans text-base font-normal">Show only ratings more than</p>
      <div class="flex justify-center pt-[8px]  ">
        <div
          v-for="rating in [1, 2, 3, 4]"
          :key="rating"
          @click="filterByRating(rating)"
          :class="{ 'selected-rating': selectedRating === rating }"
          class="w-[50px] h-[46px] flex border border-gray-300 bg-white cursor-pointer pt-[14px] pb-[13px] pl-[14px]"
        >
          <p>{{ rating }}</p>
          <img src="@/assets/images/star-s-fill 1.png" alt="" class="w-[18px] h-[18px]" />
        </div>
      </div>
    </div>

  
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRating: 0, 
      items: [
        { id: 1, name: 'Item 1', rating: 3 },
        { id: 2, name: 'Item 2', rating: 4 },
        { id: 3, name: 'Item 3', rating: 2 },
       
      ],
    };
  },
  computed: {
    filteredItems() {
      if (this.selectedRating === 0) {
        return this.items; 
      } else {

        return this.items.filter(item => item.rating > this.selectedRating);
      }
    },
  },
  methods: {
    filterByRating(rating) {
     
      this.selectedRating = this.selectedRating === rating ? 0 : rating;
    },
  },
};
</script>

<style>
.selected-rating {
  background-color: #ccc; 
}

</style>
