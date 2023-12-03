<template>
<div>
  <nav class=" mx-[100px] h-[68px]">
  <div class="flex flex-row items-center">

           <div class="flex flex-row ">
            <img src="./assets/images/bxs-plane-alt 1.png" alt="Logo" class="w-[24px] h-[24px]">
            <p class="ml-[4px] font-sans text-base font-medium">My Dream Place</p>
            </div>     

    
    <div class="flex flex-row justify-around w-[458px] ml-[232px] mr-[301px]">
      <router-link to="/">Home</router-link>
      
      <a href="#" >Discover</a>
      <a href="#" >Activites</a>
      <a href="#" >About</a>
      <a href="#" >Contact</a>
    </div>
    <div v-if="islogin" class="flex">
    <img src="@/assets/images/notification 1.png" alt="" class="w-[24px] h-[24px] my-[22px] mr-[22px]">
    <img   src="@/assets/images/Ellipse 2.png" alt="" class="w-[44px] h-[44px] my-[12px]">
     </div>
    <button v-else  class="w-[82px] h-[40px] text-gray-900  text-lg font-medium rounded-md bg-blue-500">Login</button>
   
  </div>
</nav>


</div>
</template>

<script>

export default {
  data:()=>({
   islogin:true
  }),
  methods:{

  }

}
</script>

<style>

</style>