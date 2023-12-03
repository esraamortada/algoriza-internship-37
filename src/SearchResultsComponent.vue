<template>
<div class="relative">
<div class="bg-gradient-to-b from-blue-500 to-indigo-900  text-white">
<NavbarComponent/>
<div class="h-[132px]"></div>
 
</div>

<div>
<div class="mx-[100px] flex gap-6">
  <div>
     <div class="absolute top-[176px]">
      <Search/>
     </div>
        
<div class="pt-[104px]">
 <SearchByName/>
 <Filter/>
 <Rating/>
 </div>
</div>
 <Results/>
 </div>
 <FooterComponent/>
 </div>
 </div>
</template>

<script>
import SearchByName from  '@/components/SearchPages/SearchByName.vue'
import Results from  '@/components/SearchPages/Results.vue'
import Filter from  '@/components/SearchPages/Filter.vue'
import Rating from  '@/components/SearchPages/Rating.vue'
import FooterComponent  from './FooterComponent.vue'
import NavbarComponent from '@/NavbarComponent.vue'
import Search  from '@/components/HomePages/Search.vue'

export default {
    components:{
        SearchByName,
        Results,
        Filter,
        Rating,
        FooterComponent,
        NavbarComponent,
        Search
    }

};
</script>

<style></style>
