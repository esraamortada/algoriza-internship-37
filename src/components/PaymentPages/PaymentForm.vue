<template>
  <div>
    <div class="flex flex-row pt-[30px] justify-between">

      <div class="w-[810px] h-[328px] bg-white mr-[30px] rounded-lg">
        <div class="h-[60px] rounded-tl-[6px] rounded-tr-[6px] bg-blue-500 flex flex-row ">
          <div class="py-[16px] pl-[20px]">
            <img src="@/assets/images/security-user 1.png" alt="" class="w-[28px] h-[28px] ">
          </div>

          <p class="py-[18px] pl-[16px] text-white font-sans font-semibold text-lg">Room 1 </p>
          <p class="py-[18px] pl-[18px] text-white font-sans font-medium text-base"> 2 adults, 1 double bed and 1 twin bed, Non-smoking</p>
        </div>
        <form action="" class="pl-[32px] pt-[32px]"  @submit.prevent="$emit('formSubmitted', formData)">
          <div class="flex flex-row mb-[20px]">
            <div class="">
              <label for="first_name" class="block text-sm font-semibold text-gray-600 mb-[4px]">First Name</label>
              <input type="text" id="first_name" name="first_name" class="w-[240px] p-2 border border-gray-300 rounded-md" required v-model="formData.first_name">
            </div>

            <div class="ml-[20px]">
              <label for="last_name" class="block text-sm font-semibold text-gray-600 mb-[4px]">Last Name</label>
              <input type="text" id="last_name" name="last_name" class="w-[240px] p-2 border border-gray-300 rounded-md  bg-gray-300" required v-model="formData.last_name">
            </div>

          </div>

          <div class="space-y-2">
            <label for="mobile_number" class="block text-sm font-semibold text-gray-600">Mobile Number</label>
            <div class="flex items-center">
              <select name="country_code" id="country_code" class="w-[150px] p-2 border border-gray-300  rounded-md bg-gray-300" required>
                <option value="">Eg</option>
              </select>
              <input type="number" id="mobile_number" name="mobile_number" class="p-2 border w-[338px] border-gray-300 rounded-md bg-gray-300 ml-2" required v-model="formData.mobile_number">
            </div>
          </div>

          <div class="flex items-center mt-[20px]">
            <input type="checkbox" id="receive_alerts" name="receive_alerts" class="text-blue-500" required>
            <label for="receive_alerts" class="text-sm font-semibold text-gray-600 ml-[8px]">Receive text alerts about this trip</label>
          </div>
        </form>
      </div>

 
      <div class="w-[400px] h-[400px] bg-white rounded-[6px]">
        <img src="@/assets/images/paymentImage.png" alt="" class="h-[180px] ">
        <div class="py-[20px] ml-[20px]">
          <p class="text-gray-800 font-sans font-medium text-base">Lakeside Motel Warefront</p>
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
          <div class="mt-[20px]">
            <p class="text-red-500 font-sans font-normal text-sm">Non refundable</p>
            <p class="text-gray-700 font-sans font-normal text-sm">Check in: Sunday, March 18, 2022</p>
            <p class="text-gray-700 font-sans text-sm font-normal">Check out: Tuesday, March 20, 2022</p>
            <p class="text-gray-700 font-sans text-sm font-normal">2 night stay</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
     
        first_name: '',
        last_name: '',
       
        mobile_number: '',
        receive_alerts: false,
      
      },
    };
  },

}
</script>

<style>

</style>
