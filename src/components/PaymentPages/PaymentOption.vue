<template>
  <div class="flex flex-row justify-between mb-[30px]">
    <div class="w-[810px] h-[567px] bg-white mr-[30px] rounded-l pb-[40px] ">
      <div class="h-[60px] rounded-tl-[6px] rounded-tr-[6px] bg-blue-500 flex flex-row ">
        <div class="py-[16px] pl-[20px]">
          <img src="@/assets/images/card-tick 1.png" alt="" class="w-[28px] h-[28px] ">
        </div>
        <p class="py-[18px] pl-[16px] text-white font-sans text-base font-semibold">Payment options</p>
      </div>
      <div>
        <p class="text-gray-800 font-sans text-sm font-normal pl-[46px] pt-[18px] pb-[13px]">Debit/Credit Card</p>
        <hr>
      </div>
      <div class="flex flex-row pl-[32px] pt-[32px]">
        <!-- Images -->
      </div>
      <form action="" class="pl-[32px] pt-[27px]0" @submit.prevent="submitForm">
        <div class="mb-[20px]">
          <div>
            <label for="name_on_card" class="block text-sm font-semibold text-gray-600 mb-[4px]">Name on card</label>
            <input type="text" id="name_on_card" name="name_on_card" class="w-[500px]  p-2 border border-gray-300 rounded-md  bg-gray-300" required v-model="formData.name_on_card">
          </div>
          <div class="mt-[20px]">
            <label for="card_number" class="block text-sm font-semibold text-gray-600 mb-[4px]">Debit/Credit card number</label>
            <input type="text" id="card_number" name="card_number" class="w-[500px]  p-2 border border-gray-300 rounded-md  bg-gray-300" required v-model="formData.card_number">
          </div>
        </div>
        <div class="space-y-2">
          <label for="expiration_date" class="block text-sm font-semibold text-gray-600">Expiration Date</label>
          <div class="flex items-center">
            <select name="expiration_month" id="expiration_month" class="w-[150px] p-2 border border-gray-300  rounded-md bg-gray-300 " required  v-model="formData.expiration_month">
              <option value="">Month</option>
            </select>
            <select name="expiration_year" id="expiration_year" class="w-[150px] p-2 border border-gray-300  rounded-md bg-gray-300 ml-[12px]" required  v-model="formData.expiration_year">
              <option value="">Year</option>
            </select>
          </div>
        </div>
        <div class="flex flex-row mt-[20px]">
          <div>
            <label for="security_code" class="block text-sm font-semibold text-gray-600 mb-[4px]">Security Code</label>
            <input type="text" id="security_code" name="security_code" class="w-[240px] p-2 border border-gray-300 rounded-md  bg-gray-300" required v-model="formData.security_code">
          </div>
          <div class="ml-[20px]">
            <label for="billing_zip" class="block text-sm font-semibold text-gray-600 mb-[4px] ">Billing Zip code</label>
            <input type="text" id="billing_zip" name="billing_zip" class="w-[240px] p-2 border border-gray-300 rounded-md  bg-gray-300" required v-model="formData.billing_zip">
          </div>
        </div>
      </form>
    </div>

    <div class="w-[400px] h-[217px] bg-white mt-[30px]">
      <div class="h-[55px] rounded-tl-[6px] rounded-tr-[6px] bg-green-300">
        <p class="text-gray-700 font-sans text-base font-semibold  px-[18px] py-[18px]">Price Details</p>
      </div>
      <div class="h-[95px] pt-[23px] px-[18px] ">
        <div class="flex flex-row justify-between">
          <p class="text-gray-700 font-sans text-sm font-normal">1 room X 2 nights</p>
          <p class="text-gray-700 text-right font-sans text-sm font-normal">$ 120.32</p>
        </div>
        <div class="flex flex-row justify-between pt-[12px]">
          <p class="text-gray-700 font-sans text-sm font-normal">Tax and service fees</p>
          <p class="text-gray-700 text-right font-sans text-sm font-normal">$ 8.32</p>
        </div>
      </div>
      <hr>
      <div class="flex flex-row justify-between px-[18px] pt-[25px] ">
        <p  class="text-gray-700 font-sans text-base font-semibold">Total</p>
        <p class="text-gray-800 text-right font-sans text-lg font-semibold">$130</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name_on_card: '',
        card_number: '',
        expiration_month: '',
        expiration_year: '',
        security_code: '',
        billing_zip: '',
       
      },
    };
  },
  methods: {
    submitForm() {
      
      this.$emit('formSubmitted', this.formData);
    },
  },
};
</script>

<style>

</style>
