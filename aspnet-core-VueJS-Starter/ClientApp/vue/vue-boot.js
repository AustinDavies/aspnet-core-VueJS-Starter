import Vue from 'vue'
//import axios from 'axios'
import router from './router'
//import store from './store'
//import { sync } from 'vuex-router-sync'
import App from './components/_root'

//Vue.prototype.$http = axios;

//sync(store, router);
//import Home from './components/home';

//Vue.component('home', Home);
//Vue.component('about', null);

const app = new Vue({
	router,
	...App
});

export {
	app,
	router
};