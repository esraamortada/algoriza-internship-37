<template>

<div class="rounded-md bg-gray-300 w-[295px] h-[119px] px-[18px] py-[20px]">
  
    <p class="text-gray-800 text-base font-medium">Search by property name</p>
    <div class="text-center">
    <div class="h-[44px] w-[259px] bg-white mt-[16px] flex">
     <img src="@/assets/images/search 1.png" alt="" class="ml-[12px] mt-[11px] mb-[12px]">
      <input type="text" class="w-[142px] h-[21px] mt-[11px] ml-[10px]" v-model="searchQuery" @input="searchByName" placeholder="Search by name">
    
  </div>
  </div>
</div>


 
</template>

<script>
export default {
  data:()=>({
     searchQuery: '',
    items: [
      { name: 'Item 1' },
      { name: 'Item 2' },
     
    ],
    searchResults: [],
  }),methods: {
  searchByName() {
    this.searchResults = this.items.filter(item => {
      return item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  },
},


}
</script>

<style>

</style>