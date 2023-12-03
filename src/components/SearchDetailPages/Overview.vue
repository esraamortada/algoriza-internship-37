<template>
  <div>
    <div class="w-[810px]">
      <h1 class="text-2xl font-normal font-semibold mt-[40px]" v-if="hotleDetailsInfo">{{hotleDetailsInfo.hotel_name}}</h1>

      <div class="flex items-center mb-3">
        <div class="text-yellow-500">
          <span><i class="fa fa-solid fa-star"></i></span>
          <span><i class="fa fa-solid fa-star"></i></span>
          <span><i class="fa fa-solid fa-star"></i></span>
          <span><i class="fa fa-solid fa-star"></i></span>
          <span><i class="fa fa-solid fa-star"></i></span>
        </div>
        <span class="ml-2 ">4.5</span>
        <span>(1200 Reviews)</span>
      </div>

      <p class="mb-4" v-if="hotleDetailsInfo">
        <span> <i class="fas fa-map-marker-alt mr-2"></i></span>{{hotleDetailsInfo.address}}
      </p>
    </div>

    <div class="mb-[31px] w-[810px] h-[508px] bg-white rounded-md">
      <div class="pl-[30px] pt-[24px] mb h-[307px]">
        <h3 class="text-xl font-bold"> Overview</h3>
        <p  class="text-base font-normal pt-5">
          Featuring free WiFi throughout the property, Lakeside Motel Waterfront
          offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free
          private parking is available on site. Each room at this motel is air
          conditioned and comes with a flat-screen TV. You will find a kettle,
          toaster and a microwave in the room. Each room is fitted with a
          private bathroom. Guests have access to barbecue facilities and a
          lovely large lawn area. Metung is 6.8 mi from Lakeside Motel
          Waterfront, while Paynesville is 14 mi from the property. Couples in
          particular like the location – they rated it 9.2 for a two-person
          trip.
        </p>
      </div>
      <hr>
      <div class="pl-[30px] mt-[26px] mb-[41px]">
        <h3 class="text-xl font-bold"> Top facilities</h3>
        <div class="flex flex-row mt-[24px]">
           <div>
            <div class="flex flex-row mb-[13px]"><img src="@/assets/images/home-wifi 1.png" alt=""> 
            <p class="ml-[12px]">Free wifi</p></div
            >
            
           <div class="flex flex-row mb-[13px]"><img src="@/assets/images/home-wifi 1.png" alt=""> 
            <p class="ml-[12px]">Air Conditioning</p></div
            >
            
           <div class="flex flex-row mb-[13px]"><img src="@/assets/images/home-wifi 1.png" alt=""> 
            <p class="ml-[12px]">Parking available</p></div
            >
            </div>

          
            <div class="ml-[119px] ">
            <div class="flex flex-row mb-[13px]"><img src="@/assets/images/home-wifi 1.png" alt=""> 
            <p class="ml-[12px]">Business Services</p></div
            >
            
           <div class="flex flex-row mb-[13px]"><img src="@/assets/images/home-wifi 1.png" alt=""> 
            <p class="ml-[12px]">Swimming pool</p></div
            >
            
           <div class="flex flex-row mb-[13px]"><img src="@/assets/images/home-wifi 1.png" alt=""> 
            <p class="ml-[12px]">Top rated in area</p></div
            >
            </div>
        </div>

      </div>
      
    </div>
  
  </div>
</template>

<script>
export default {


data:()=>({
  
}),
props:['hotleDetailsInfo'],
  //  mounted() {
     
     
  //   this.getData() 
  // },
  methods:{
    getData(){
    console.log(this.hotleDetailsInfo)
    }
  }
};
</script>

<style>



</style>
