<template>
<div>
  <NavbarComponent/>
<div class="bg-gray-200">
<div class="mx-[205px]">

  <h3 class="text-gray-900 font-semibold text-2xl font-sans mb-[28px] pt-[60px]">My trips</h3>
  <div
    class="rounded-md border border-gray-300 bg-white w-[1030px] h-[240px]">
  <div class="flex flex-row">
    <div class="w-[305px] p-5">
    <img src="@/assets/images/austoralia.png" alt=""  />
    </div>
    <div class="w-[701px]  pt-[24px] pb-[23px]">
      <div>
        <h2
          class="text-gray-900 font-sans text-base font-medium">
          Julia Dens Resort
        </h2>
      
      </div>

      <div class="flex items-center ">
        <div class="text-yellow-500">
          <span><i class="fa fa-solid fa-star"></i></span>
          <span><i class="fa fa-solid fa-star"></i></span>
          <span><i class="fa fa-solid fa-star"></i></span>
          <span><i class="fa fa-solid fa-star"></i></span>
          <span><i class="fa fa-solid fa-star"></i></span>
        </div>
        <span class="ml-2">4.5</span>
        <span>(1200 Reviews)</span>
      </div>
     
      <div class="flex flex-row justify-between pt-[30px]">
         
        <div>
            <p class="font-sans text-base font-normal text-red-500">Non refundable</p>
             <p class="font-sans text-base font-normal">Check in: Sunday, March 18, 2022</p>
              <p class="font-sans text-base font-normal">Check out: Tuesday, March 20, 2022</p>
              <p class="font-sans text-base font-normal">2 night stay</p>

        </div>
        <div>
        <div>
        <span class="text-sm text-red-500"><del>$160</del></span>
        <span class="text-xl">$130</span>
        <p class="mt-2">Includes taxes and fees</p>
        </div>
        <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            See Availability
        </button>
        </div>
      
    
     </div>

    </div>
    </div>

  </div>
</div>
<div class="my-[81px] mx-[100px]">
  <Covid/>

</div>
<FooterComponent/>
</div>


</div>
</template>

<script>
import NavbarComponent from '@/NavbarComponent.vue'
import FooterComponent  from './FooterComponent.vue'
import Covid  from '@/components/HomePages/Covid.vue'
export default {
  components:{
    NavbarComponent,
    FooterComponent,
    Covid

    
  }

}
</script>

<style>

</style>