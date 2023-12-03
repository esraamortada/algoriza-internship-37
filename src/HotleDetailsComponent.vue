<template>
<div>
  <NavbarComponent/>

  <div class="bg-gray-200">
  <div class="mx-[100px]">
    <Header :hotleDetailsInfo="hotleDetails" />
           <div class="flex flex-row">
    <Overview/>
    <Map/>
  </div> 
  <Rooms/>
 
<div class="mt-[172px] mb-[82px]">
   <Covid/>

</div>
  </div>
  
<FooterComponent/>
  
  </div>
  </div>
</template>

<script>
import Header  from '@/components/SearchDetailPages/Header.vue'
import Map  from '@/components/SearchDetailPages/Map.vue'
import axios from 'axios'
import Overview  from '@/components/SearchDetailPages/Overview.vue'
import Rooms  from '@/components/SearchDetailPages/Rooms.vue'
import FooterComponent  from './FooterComponent.vue'
import Covid  from '@/components/HomePages/Covid.vue'
import NavbarComponent from '@/NavbarComponent.vue'


export default {
  data: () => ({
  hotleDetails: {
    
  }
}),
components: {
  Header,
  Map,
  Overview,
  Rooms,
  FooterComponent,
  Covid,
  NavbarComponent
},
 mounted() {
  axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails?hotel_id=191605&arrival_date=2023-11-29&departure_date=2023-11-30&adults=1&children_age=1%2C17&room_qty=1&languagecode=en-us&currency_code=EUR',
  {
    headers:{
           'X-RapidAPI-Key': 'abe7890fccmsh101162d24cecda5p1e3282jsndd585ed33769',
           'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'

    }
  }).then((res)=>{
      this.hotleDetails = res.data;
  }).catch((err)=>{
    console.log(err);
  })
  
}










  
// const url = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails?hotel_id=191605&arrival_date=2023-11-29&departure_date=2023-11-30&adults=1&children_age=1%2C17&room_qty=1&languagecode=en-us&currency_code=EUR';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '0fb3fe88d0msh0f3205a6c5e0495p1c6a9bjsn85f2ebb27f98',
//     'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
//   }
// };


//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     this.hotleDetails = result.data;
//     console.log(this.hotleDetails);
//   } catch (error) {
//     console.error(error);
//   }
// }
,
methods:{

},




}
</script>

<style scoped>

</style>