<template>
<div>

 <div>
   <router-view></router-view>
</div>

 


</div>
  
</template>

<script>

import FooterComponent  from './FooterComponent.vue'
import NavbarComponent from '@/NavbarComponent.vue'
export default {
    components:{
        FooterComponent,
        NavbarComponent

    }

}
</script>

<style>

</style>