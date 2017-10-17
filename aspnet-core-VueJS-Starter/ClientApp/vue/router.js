import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home';
const About = () => import('./components/about');

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
];

let AppRouter = new VueRouter({ mode: 'history', routes });

export default AppRouter;