<template>
<div class="my-14">
    <h3 class="text-gray-800  text-3xl font-semibold  mb-6  leading-normal">Popular hotels</h3>

   <div class="grid grid-cols-4 gap-4 ">
    <div class="bg-white  py-4 rounded-lg ">
        <img src="@/assets/images/hotle1.png" alt="Lakeside Motel Warefront">
        <div class="mt-2">
            <h6 class="text-xl font-semibold">Lakeside Motel Warefront</h6>
            <p class="text-sm text-gray-500">2246 properties</p>
        </div>
    </div>
    <div class="bg-white py-4 rounded-lg ">
        <img src="@/assets/images/hotle2.png" alt="Recce Graham resor">
        <div class="mt-2">
            <h6 class="text-xl font-semibold">Recce Graham resort</h6>
            <p class="text-sm text-gray-500">1278 properties</p>
        </div>
    </div>
    <div class="bg-white py-4 rounded-lg ">
        <img src="@/assets/images/hotle3.png" alt="Fireside Dinners">
        <div class="mt-2">
            <h6 class="text-xl font-semibold">Fireside Dinners</h6>
            <p class="text-sm text-gray-500">480 properties</p>
        </div>
    </div>
    <div class="bg-white py-4 rounded-lg ">
        <img src="@/assets/images/hotle4.png" alt="Oculous Inn Stay">
        <div class="mt-2">
            <h6 class="text-xl font-semibold">Oculous Inn Stay</h6>
            <p class="text-sm text-gray-500">320 properties</p>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    data:()=>({

        //  hotles:[]

    }),

   async mounted(){

        const url = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=-2092174&search_type=CITY&arrival_date=2023-11-24&departure_date=2023-11-24&adults=1&children_age=0%2C17&room_qty=1&page_number=1&languagecode=en-us&currency_code=AED';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0fb3fe88d0msh0f3205a6c5e0495p1c6a9bjsn85f2ebb27f98',
		'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
	}
};
 let resp = await fetch(url, options);
         let respObjects = await resp.json();
        // this.hotles = respObjects.data.hotles

    }

}
</script>

<style>

</style>