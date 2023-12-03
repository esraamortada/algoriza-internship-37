<template>
    <div class="w-[810px] h-[423px] bg-white rounded-lg">
      <div class="h-[60px] rounded-tl-[6px] rounded-tr-[6px] bg-yellow-400"> 
        
        
        
        <p class="py-[18px] pl-[18px] text-gray-800 font-sans text-base font-semibold"> Important information about your booking</p>

      </div>
      <div class="px-6">

      <div class=" pt-8">
        <ol type="1">
            <li>This rate is non-refundable. If you change or cancel your booking you will not get a refund or credit to use for a future stay.</li>
            <li>Stay extensions will require a new reservation.</li>
            <li>Front desk staff will greet guests on arrival</li>
            <li>No refunds will be issued for late check-in or early check-out.</li>
        </ol>

        
        </div>
        <div class="pt-[32px]">
            <p class="text-gray-700 font-sans text-sm font-normal">By clicking the button below, I acknowledge that I have reviewed the <span class="text-blue-500">Privacy Statement</span> and have reviewd and accept the <span class="text-blue-500">Rules and Restrictions</span> and <span class="text-blue-500"> Terms of Use.</span></p>
        </div>
        </div>

        <button class="text-white font-sans text-base font-semibold rounded-md bg-blue-500 py-3 px-[18px] ml-6 mt-[24px]" @click="book">Complete Booking</button>

        <div class="flex flex-row mt-[21px] px-[24px]">
            <img src="@/assets/images/lock-circle 1.png" alt="">
            <p class="text-gray-700 font-sans text-sm font-normal ml-[8px]">We use secure transmission and encrypted storage to protect your personal information</p>
        </div>

    </div>
</template>

<script>
export default {


    methods:{
        book(){
            this.$router.push('/mytrips'); 
        }
    }

}
</script>

<style>

</style>