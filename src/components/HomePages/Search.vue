<template>
<div class="flex mx-[105px] ">
   <div class="bg-white p-2 rounded-md shadow-md  w-[1030px] h-[64px] ">


    <form class="flex flex-row justify-around "  @submit.prevent="sendData">

 
      <div class="flex items-center">
        
        <select id="select" name="select" class="p-2 border rounded-md" v-model="searchData.dest_id" >
         
          <option  v-for="city in cities" :key="city.dest_id" :value="city.dest_id">{{city.city_name}}</option>
         
        
        </select>
      </div>

      <div class="flex items-center">
       
        <input type="date"  name="arrival_date" class="p-2 border rounded-md" placeholder="Check in date" v-model="searchData.arrival_date">
      </div>

      <div class="flex items-center">
        
        <input type="date"  name="departure_date" class="p-2 border rounded-md" placeholder="Check out date" v-model="departure_date">
      </div>

 
      <div class="flex items-center">
      
        <div class="relative">
          <input type="number"  name="number1" class="p-2 border rounded-md pl-8" placeholder="Guests">
          <div class="absolute inset-y-0 left-0 flex items-center pl-2">
           
            <span class="text-gray-500">&#128206;</span>
          </div>
        </div>
      </div>

      <div class="flex items-center">
        
        <div class="relative">
          <input type="number" name="number2" class="p-2 border rounded-md pl-8" placeholder="Rooms">
          <div class="absolute inset-y-0 left-0 flex items-center pl-2">
           
            <span class="text-gray-500">&#128206;</span>
          </div>
        </div>
      </div>


    <button type="submit" class="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 transition">Search</button>


     

    </form>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchData: {
        dest_id: '',
        arrival_date: '',
        departure_date: '',
        guests: '',
        rooms: ''
      },
      cities: [
        
      ]
    };
  },  async created(){

      const url = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=Egypt';
      const options = {
        method: 'GET',
        headers: {
           'X-RapidAPI-Key': 'abe7890fccmsh101162d24cecda5p1e3282jsndd585ed33769',
           'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
};


       let resp = await fetch(url,options);
         let respObjects = await resp.json();
         this.cities = respObjects.data
      

  },
  methods: {
    sendData() {

      const apiUrl = 'https://booking-com15.p.rapidapi.com/api/v1/hotels';

  
      axios.post(apiUrl, this.searchData)
        .then(response => {
          console.log(response.data);
        
          this.$router.push('/search');
        })
        .catch(error => {
          console.error(error);
        });


      console.log('Data to be sent:', this.searchData);
    }
  }
};
</script>
<style>

</style>


