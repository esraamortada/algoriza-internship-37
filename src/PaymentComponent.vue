<template>
<div>
  <NavbarComponent/>


<div class="bg-gray-200">

  <div class="mx-[100px] pb-[141px]">
    <div class="text-gray-900 font-sans text-2xl font-semibold pt-[60px]">
     Secure your reservation
    </div>
<div class="mt-[30px]">
       <Covid/>

</div>

 
  <PaymentForm  @formSubmitted="handleFormSubmitted"/>
  <PaymentOption @formSubmitted="handleFormSubmitted"/>
  <information/>
  </div>
   

  </div>
  </div>
</template>

<script>
import PaymentForm  from '@/components/PaymentPages/PaymentForm.vue'
import PaymentOption  from '@/components/PaymentPages/PaymentOption.vue'
import Information  from '@/components/PaymentPages/Information.vue'
import Covid  from '@/components/HomePages/Covid.vue'
import NavbarComponent from '@/NavbarComponent.vue'

export default {
   components:{
    PaymentForm,
    PaymentOption,
    Information,
    Covid,
    NavbarComponent
   
   },
   methods: {
    handleFormSubmitted(formData) {
      // Do something with the form data in the parent component
      console.log('Form submitted in parent:', formData);
    },
  },
}
</script>

<style>

</style>