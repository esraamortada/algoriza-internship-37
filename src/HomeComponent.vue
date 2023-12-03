<template>
<div>
<NavbarComponent/>

<div class="bg-white">
 <div class="mx-[100px]">
    <div class="relative mt-[12px]">
        <Header/>
        <div class="absolute top-[468px]"> 
        <Search/>
        </div>
    </div>
 <div class="mt-[82px]">
    
      <Covid/>

 </div>

  <Country/>
  <GetInspo/>
   <Hotels/>
   <Download/> 
  

   
 </div>
 <FooterComponent/>
 </div>
 </div>
</template>

<script>
import Header  from '@/components/HomePages/Header.vue'
import Hotels  from '@/components/HomePages/Hotels.vue'
import GetInspo  from '@/components/HomePages/GetInspo.vue'
import Country  from '@/components/HomePages/Country.vue'
import Search  from '@/components/HomePages/Search.vue'
import Download  from '@/components/HomePages/Download.vue'
import Covid  from '@/components/HomePages/Covid.vue'
import FooterComponent  from './FooterComponent.vue'
import NavbarComponent from '@/NavbarComponent.vue'





 
export default {
    components:{
        Header,
        Hotels,
        GetInspo,
        Country,
        Download,
        Search,
        Covid,
        FooterComponent,
        NavbarComponent
        
    }
   

}
</script>

<style>

</style>
