import{createRouter,createWebHistory } from 'vue-router'
import HomeComponent from '../HomeComponent.vue'
import SearchResultsComponent from '../SearchResultsComponent.vue'
import NotFoundComponent from '../NotFoundComponent.vue'
import HotleDetailsComponent from '../HotleDetailsComponent.vue'
import LoginComponent from '../LoginComponent.vue'
import MyTrips from '../MyTrips.vue'
import PaymentComponent from '../PaymentComponent.vue'
 
HotleDetailsComponent

const routes =[{
    path:'/',
    component: HomeComponent
},
{
    path:'/search',
    component: SearchResultsComponent

},

{
    path:'/login',
    component: LoginComponent

},
{
    path:'/mytrips',
    component: MyTrips

},
{
    path:'/pay',
    component: PaymentComponent

},
{
    path:'/login',
    component: LoginComponent

},
{
    path:'/hotle',
    component: HotleDetailsComponent

},

{
    path:'/:catchAll(.*)',
    component: NotFoundComponent

}

]

const router = createRouter({
    routes:routes,
    history:createWebHistory()
});
  export default router;