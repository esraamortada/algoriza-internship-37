<template>
  <div class="h-screen flex items-center justify-center">
    <div id="app" class="bg-white p-8 w-96">
      <h2 class="text-2xl font-semibold mb-6 text-center">Sign in</h2>

      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-600">Email address</label>
          <input v-model="email" type="email" class="mt-1 p-2 w-full bg-gray-100">
          <p v-if="!isEmailValid" class="text-red-500 text-xs mt-1">Please enter a valid email address.</p>
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
          <input v-model="password" type="password" class="mt-1 p-2 w-full bg-gray-100">
          <p v-if="!isPasswordValid" class="text-red-500 text-xs mt-1">Password must be at least 6 characters long.</p>
        </div>

        <button class="bg-blue-500 text-white p-2 rounded-md w-full">Submit</button>
      </form>

      <p class="text-center text-sm mt-2">Already have an account? <span class="text-blue-500">Sign in</span></p>
    </div>
    <p v-if="errorMessage" class="text-red-500">{{errorMessage}}</p>
  </div>
</template>

<script>
// import{authStore} from '@/Stores/auth'
export default {
  // useauthStore:authStore()

  data:()=>({
      email: '',
        password: '',
        errorMessage: '',
        isEmailValid: true,
        isPasswordValid: true,
        isLoggedin: false, 
    }),
    methods:{
        async login() {
            this.isEmailValid = this.isValidEmail(this.email);
            this.isPasswordValid = this.isValidPassword(this.password);
        
            if (this.isEmailValid && this.isPasswordValid) {
              try {
                const response = await fetch('http://localhost:4000/signin'); 
                const users = await response.json();
        
                const user = users.find(u => u.email === this.email && u.password === this.password);
        
                if (user) {
                  this.isLoggedin = true; 
                  this.$router.push('/'); 
                } else {
                  this.errorMessage = 'Invalid username or password';
                  this.isLoggedin = false; 
                }
              } catch (error) {
                console.error('Error during login:', error);
                this.isLoggedin = false;
              }
            }
          },
          isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
          },
          isValidPassword(password) {
            return password.length >= 6;
          },


    }

};
</script>

<style scoped>

</style>
