// import {defineStore} from 'pinia'
 


export const authStore = defineStore("authinticationstore",{
    state:()=>({
        email: '',
        password: '',
        errorMessage: '',
        isEmailValid: true,
        isPasswordValid: true,
        isLoggedin: false, 
    }),
    actions:{
        async login() {
            this.isEmailValid = this.isValidEmail(this.email);
            this.isPasswordValid = this.isValidPassword(this.password);
        
            if (this.isEmailValid && this.isPasswordValid) {
              try {
                const response = await fetch('http://localhost:4000/signin'); 
                const users = await response.json();
        
                const user = users.find(u => u.email === this.email && u.password === this.password);
        
                if (user) {
                  this.isLoggedin = true; // Set the property to true
                  this.$router.push('/search'); 
                } else {
                  this.errorMessage = 'Invalid username or password';
                  this.isLoggedin = false; // Set the property to false
                }
              } catch (error) {
                console.error('Error during login:', error);
                this.isLoggedin = false; // Set the property to false
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
})